class Api::V1::ProductsController < ApplicationController
    before_action :authenticate_api_v1_user!, only: [:create, :update, :destroy]
    def index
        render json: { products: Product.all.order("created_at DESC") }
    end

    def show
        @product = Product.find(params[:id])
        render json: @product
    end
    
    def create
        product = Product.new(product_params)  
        product.save
    end
    
    def destroy
        @product = Product.find(params[:id])
        if current_api_v1_user == @product.user_id
            @product.destroy
            render json: {status:"ok",message:"success"}
        else
            render json: {message: "can no delete data"}, status: 422
        end
    end
    
    def update
        @product.title=product_params[:title]
        @product.image = product_params[:image] if product_params[:image] != ""
        if current_api_v1_user.id == product.user_id
            if @product.update(product_params)
                render json: {status: 200, product: @product}
            else
                render json: {status: 500, message:"更新に失敗"}
            end
        end
    end
    
    private 
    def product_params
        params.permit(:title, :image, :reason, :thoughts, :tech, :loadmap, :day, :commitment, :link, :github, :how).merge(user_id: current_api_v1_user.id)
    end
end
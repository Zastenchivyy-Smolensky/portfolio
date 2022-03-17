class Api::V1::ProductsController < ApplicationController
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
        @product.destroy
        render json: {status:"ok",message:"success"}
    end
    
    def update
        @product.title=product_params[:title]
        @product.image = product_params[:image] if product_params[:image] != ""
        if @prodocut.save
            render json: {status: 200, product: @product}
        else
            render json: {status: 500, message:"更新に失敗"}
        end
    end
    
    private 
    def product_params
        params.permit(:title, :image, :reason, :thoughts, :tech, :loadmap, :day, :commitment, :link, :github, :how)
    end
end
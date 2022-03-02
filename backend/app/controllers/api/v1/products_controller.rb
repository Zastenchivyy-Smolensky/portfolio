class Api::V1::ProductsController < ApplicationController
    def index
        products = Product.all
        render json: { status: 'SUCCESS', message: 'Loaded products', data: products }
    end

    def show
        @product = Product.find(params[:id])
        render json: {status: "ok",message:"Load product", data:@product}
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: {status: 200, data:product}
        else
            render json: {status: 500, data: product.errors}
        end
    end
    
    def destroy
        @product = Product.find(params[:id])
        @product.destroy
        render json: {status:"ok",message:"success"}
    end

    
    def update
        @product = Product.find(params[:id])
        if @product.update(product_params)
            render json: {status: "SUCCESS",message:"成功", data: @product}
        else
            render json: { status: 'SUCCESS', message: 'Not updated', data: @product.errors }
        end
    end
    
    private 
    def product_params
        params.permit(:title, :image, :reason, :thoughts, :tech, :loadmap, :day, :commitment, :link, :github, :how)
    end
end

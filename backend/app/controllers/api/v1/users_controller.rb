class Api::V1::UsersController < ApplicationController
    def show
        render json: Product.where(user_id: params[:id])
    end
end

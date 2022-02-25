class ItemsController < ApplicationController
  before_action :set_item, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_items]

  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  def get_user_items
    @user = User.find(params[:user_id])
    render json: @user.products
  end

  # GET /items/1
  def show
    render json: @item, include: :reviews
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:image_url, :title, :price, :condition, :size, :description, :user_id)
    end
end

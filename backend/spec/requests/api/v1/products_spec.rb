require 'rails_helper'

describe 'ProductAPI' do
  it '全てのポストを取得する' do
    FactoryBot.create_list(:product, 10)

    get '/api/v1/products'
    json = JSON.parse(response.body)

    # リクエスト成功を表す200が返ってきたか確認する。
    expect(response.status).to eq(200)

    # 正しい数のデータが返されたか確認する。
    expect(json['data'].length).to eq(10)
  end

  it "特定のproductを習得する" do
    product = create(:product, title:"test-title")
    get "/api/v1/products/#{product.id}"

    json = JSON.parse(response.body)
    expect(response.status).to eq(200)
    expect(json["data"]["title"]).to eq(product.title)
  end

  it "新しいproductを作成する" do
    valid_params={title:"title"}
    expect { post "/api/v1/products", params:{product: valid_params}}.to change(Product, :count).by(+1)
    expect(response.status).to eq(200)
  end

  it "productを編集する" do
    product = create(:product, title: "old-title")
    put "/api/v1/products/#{product.id}", params: { product: {title: "new-title"}  }
    json = JSON.parse(response.body)
    expect(response.status).to eq(200)
    expect(json['data']['title']).to eq(product.title)
  end

  it "Productを削除する" do
    product=create(:product)
    expect {delete "/api/v1/products/#{product.id}"}.to change(Product, :count).by(-1)
    expect(response.status).to eq(200)
  end
end
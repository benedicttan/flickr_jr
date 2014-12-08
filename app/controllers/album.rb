get "/albums/:album_id" do
  @album_id = params[:album_id]
  erb :album
end
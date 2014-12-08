require 'rubygems'
require 'haml'

# Handle GET-request (Show the upload form)
get "/upload" do
  haml :upload
end

# Handle POST-request (Receive and save the uploaded file)
post "/upload" do
  if params[:album_id].to_i == 0
    album = Album.create(name: params[:new_album_name], user: session[:user])
  else
    album = Album.find(params[:album_id].to_i)
  end
  photo = Photo.new()
  photo.file = params[:image]
  photo.album = album
  photo.save
  erb :index
end

get '/photos/:id' do
  @id = params[:id]
  erb :photo
end
class Api::SuperheroesController < ApplicationController

def index 
  superheroes=Superhero.all
  render json: superheroes
end

def show
  @superhero = Superhero.find(params[:id])
  render json: @superhero
end

def create 
  @superhero = Superhero.new(superhero_params)
  if(@superhero.save)
    render json:@superhero
  else
   # render json:{ @superhero.errors.full_messages,status:422}
 end
end

def update
  @superheroes = Superhero.find(params[:id])
  if @superheroes.update(superhero_params)
    render json: @superheroes
  else
  end
end

def destroy
  # render json: @superhero.destroy
 @superheroes = Superhero.find(params[:id])
 if @superheroes.destroy
  render json: @superheroes
 else
 end
end
  


private 
  def superhero_params 
    params.require(:Superhero).permit(:name,:power)
  end
end
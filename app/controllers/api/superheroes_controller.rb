class Api::SuperheroesController < ApplicationController
before_action :set_superhero, only:[:show, :update, :destroy]

def index 
  superheroes=Superhero.all
  render json: superheroes
end

def show
  render json: @superhero
end

def create 
  superhero = Superhero.new(superhero_params)
  if(@uperhero.save)
    render json: superhero
  else
   # render json:{ @superhero.errors.full_messages,status:422}
 end
end

def update
  if @superhero.update(superhero_params)
    render json: @superhero
  else
  end
end

def destroy
  # render json: @superhero.destroy
 if @superhero.destroy
  render json: @superhero
 else
 end
end
  


private

  def set_superhero
    @superhero = Superhero.find(params[:id])
  end

  def superhero_params 
    params.require(:Superhero).permit(:name,:power)
  end
end
class Api::SuperheroesController < ApplicationController

def index 
  superheroes=Superhero.all
  render json: superheroes
end

def create 
  @superhero = Superhero.new(superhero_params)
  if(@superhero.save)
    render json:@superhero
  else
   # render json:{ @superhero.errors.full_messages,status:422}
 end
end
  


private 
  def superhero_params 
    params.require(:Superhero).permit(:name,:power)
  end
end
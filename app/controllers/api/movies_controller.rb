class Api::MoviesController < ApplicationController
    before_action :set_movie, only:[:show, :update, :destroy]
    
    def index 
      movies=Movie.all
      render json: movies
    end
    
    def show
      render json: @movie
    end
    
    def create 
      movie = Movie.new(movie_params)
      if(@uperhero.save)
        render json: movie
      else
     end
    end
    
    def update
      if @movie.update(movie_params)
        render json: @movie
      else
      end
    end
    
    def destroy
     if @movie.destroy
      render json: @movie
     else
     end
    end
      
    
    
    private
    
      def set_movie
        @movie = Movie.find(params[:id])
      end
    
      def movie_params 
        params.require(:Movie).permit(:title,:quote)
      end
    end

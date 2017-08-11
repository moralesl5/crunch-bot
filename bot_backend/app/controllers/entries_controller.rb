class EntriesController < ApplicationController
	before_action :set_entry, only: [:show]

	def index
		@entries = Entry.all
		render :json => @entries
	end

	def show
		@entry = Entry.find(params[:id])
		render :json => @entry
	end

	def create
		@entry = Entry.create(entry_params)
		render :json => @entry
	end

	def set_entry
		@entry = Entry.find(params[:id])
	end

	def entry_params
		params.permit(:name, :user_name, :tz, :image, :email, :search, :location)
	end
end

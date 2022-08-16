# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags

# FILE: app/controller/blog_posts_controller.rb

# ---1) class named BlogPostController that inherits from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) Line 13 we are making an active record call and assigning it to the instance variable @post
    @posts = BlogPost.all
  end

  def show
    # ---3) Line 18 we are making an active record call accessing one item (id as the parameter)
    @post = BlogPost.find(params[:id])
  end

  # ---4)Lines 22-24 will allow users to be able to add a blog post to the application and into the database. A form can be created in the erb file to be filled up by the user
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)Line 28 will submit the data to the database. blog_post_params require parameters, so we need an if/else statements to check if data inputted is valid. If the input is valid, then it will get added, if it is not valid it will redirect you to the form
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Will submit the data to the database and requires a parameter id.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7) The lines below will update the edited entry into the database. This also checks if the input is valid or not
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this redirects us to the post that we want to destroy if the entry is not destroyed
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private will restrict where the method below can be called in the program
  private

  def blog_post_params
    # ---10) strong params lets control what cna be manipulated in our database. Require is basically the parameter that requires a user to have an input, and permit is the paramer that is permitted to be created/edited whether or not it is present
    params.require(:blog_post).permit(:title, :content)
  end
end

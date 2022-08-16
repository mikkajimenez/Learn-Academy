# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: Delete, so that it only deletes on particular entry in the database. (this is a guess)

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: Controller, creates a controller in the file. Model, creates the fields/categories and can specify the type of entry it will take in. And Migrate, to add another category to the model. (also guesses)

Researched answer: Scaffold, Model, Controller, View, Helper, Mailer, Observer, Integration, Feature, Job. Did not know there's so many of them

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students

- def index: this will access the whole record students

action: "POST" route: /students

- def create: this will create a new entry for students

action: "GET" route: /students/new

- def new: this will show a form to create a new entry for students

action: "GET" route: /students/2

- def show: this will access the specific student with the id 2

action: "GET" route: /students/2/edit

- def update: this will show a form for editing a specific student (id 2)

action: "PATCH" route: /students/2

- def update: this will update student id 2

action: "DELETE" route: /students/2

- def detroy: destroys specific id 2 from students

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Stories: To-Do App

- As a user, I can see 5 Activities, their titles, descriptions, due dates, completed/not completed, and a category that tell you if it's either for school/work/home/personal
- As a user, I can add activities in a form that requires an activity title and a category
- As a user, I am redirected to the form if I do not complete the required items
- As a user, I can see an alert that tells me that my activity has been successfully added
- As a user, I can edit activities
- As a user, I can see an alert that tells me that my activity has been successfully edited
- As a user, I can delete activities
- As a user, I can see an alert that tells me that my activity has been successfully deleted
- As a user, I can mark an activity complete
- As a user, I can see an error if I enter a title of an activity that matches another title of activity that has already been created

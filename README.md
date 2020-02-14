# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DIY API — Homework

### Deliverable

It's time to make your own API! Using what we learned, use the Sequelize ORM to perform full CRUD functionality on a model (subject of your choosing). 

Your API should have 5 routes

| Method | Action | URL | Functionality |
|--------|:------:|:---:|:--------------|
| GET | index | /widgets | list all widgets |
| POST | create | /widgets | add a widget |
| GET | detail/show | /widgets/:id | show one widget |
| PUT | update | /widgets/:id | update one widget |
| DELETE | delete | /widgets/:id | delete one widget |

Your model should have at least three columns (not including id, createdAt, and updatedAt). For example:

| column name | type |
|:-----------:|:----:|
|name | text|
|wodgets | integer |
|quantity | integer |

## Steps

You will need to 
1. npm init 
2. git init
3. Sequelize init

First, stub out your routes.
Second, make your models and migrate them.
Third, link them! Make the magic happen!

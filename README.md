# links::link:

 [Heroku Link](https://nutritious-app-g11.herokuapp.com/)


# Nuritious: 🍇
* An application that depends on an two APIs to display the data inside it from the server, and it displays fruits and thier nutritions vaules.

# why::question: 

* Alot of diets are based on fruits.However ,some fruits have a high percentage of sugar or fats.Our app give the client infromation about the nutritions vaules for any fruit.


# User Story::memo: 
###  As a user:

* I can view a wide range of fruits when I enter the website. 
* I can search for any fruit I want and get an image of this fruit and all its nutrutions values.
* When I enter an invalid fruit name I get a message that this fruit doesn't exist .


## clone-it
- `$git clone https://github.com/GSG-G11/nutritious-Saleh-Fady`
- Change your current directory `$ cd ./nutritious-Saleh-Fady`
- Open it with your favorite text editor `code .`
- Install NPM Packages: `$ npm install`
- to run start : `$ npm run start`
- run it locally: `http://localhost:3000/`
- Enjoy :smiley:

## End Points API
 ### /getFruites
 #### Return value: A list of seven fruits in the site.
 #### Link: https://nutritious-app-g11.herokuapp.com/getFruites
 

 ### /search
 #### Return value: A one fruit with its nutritions values
 #### Link: POST https://nutritious-app-g11.herokuapp.com/search
`method: 'POST',
    body: JSON.stringify({ name: input }),`

## tech-stack
- HTML
- CSS
- JS
- Node.js
- API 
- Fetch API
- Testing


# Team Members: 👥
[Fady Alwazir](https://github.com/Fady-Alwazir)

[Saleh T. Marouf](https://github.com/devstm)

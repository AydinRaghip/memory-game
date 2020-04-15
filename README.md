# Game of Thrones Memory Tile Game

For this project I wanted to create a memory game slightly different from the simon game given as an example in the project intro.
Which is why I decided on the tile matching memory game. To make it more appealing to users I also thought giving the game a theme would 
be a good idea so I decided on Game of Thrones as it is an extremely popular TV show as well as one of my favourites.

# UX

As Game of Thrones is in a somewhat medieval setting I decided a minimalist/rustic appearance would complement the theme well.
As a memory game my basic intent was to supply the users with a simple game that they could play to their hearts content. The game as a
whole is aimed at all age groups as compared to the actual TV show the game is suitable for all ages.

User Story
* I am a user looking to access the game via the start button on the main page.
* I am a user wanting to play the memory game by matching the tiles in pairs.
* I am a user wanting to refresh the game as I have completed it.

# Features

## Existing Features

Start button - This feature is a basic start button which allows all users to start the memory game.

Memory game - After clicking the start button the memory game is activated and allows all of the users to play the memory game

## Features Left to Implement

Restart button - The next step in building this memory game would have been to create a restart button which would allow users to restart
the game without having to press the refresh button in the web browser.

Timer - After creating a restart button I would then like to tackle the challenge of incrementing the difficulty. To do this I would create
difficulty settings which would allow users to play against a set timer. The lower the difficulty, the more time users would have to complete
the game; in contrast, the higher the difficulty the less time the users would have to complete the game.

Win message - To finish off the game I would like to create a win message which would appear on screen once users finish the game.

# Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

[HTML](https://www.w3schools.com/html/html_intro.asp) - I used HTML to create a basic structure to work around when creating my memory game.

[CSS](https://www.w3schools.com/css/css_intro.asp) - I used CSS to add styling to the code that I had written.

[Javascript](https://www.w3schools.com/js/) - Javascript aswell as Jquery was used to create the memory game itself.

[Jasmine testing framework](https://jasmine.github.io/) - The Jasmine testing framework was used in order to test the javascript code that I
had written.

# Testing

1. Start button testing

* The testing for the start button is pretty straight forward. To start the game you simply have to click on the start button. I made sure this was
correctly coded so that everytime I press the start button it would activate the memory game. I paid extra attention to this testing so as to ensure
that the game would always start up correctly once the start button was clicked.

2. Memory game testing

* To test the memory game itself I had to make sure that all aspects operated correctly. This included:
    * To make sure that only two tiles could be selected at any one time I ran through the game multiple times attempting to click on more than
      two tiles. The game would not let me selecte more than two tiles which showed me this game feature was successfully implemented. 
    * Playing through the game several times allowed me to see that if tiles matched then they were successfully hidden from the user, whereas
      they were successfully flipped back over if they were two different tiles.
    * By refreshing the game multiple times I was able to see that the game successfully returned to the start button page and displayed a new
      arrangement of tiles if the memory game was activated.

# Git versions and deployment

Admittingly I compeletly forgot to save my work to a github repository each time I finished a section of the project.
However, at the end of the project I created a Github repository and saved my work for it to be accessed later on  by myself and others.

# Credits

## Media
The game of thrones icons used on the tiles in my game were from https://icons8.com/icons
The game of thrones image used on the tiles in my game was obtained from google.com

## Acknowledgements
I received some inspiration for this game from the simon memory game that was displayed in the project section of the course.
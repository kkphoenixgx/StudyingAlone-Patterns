# Studying Alone

Snake game **07/11/21**

To start understanding the snake game, we have to understand the simple mechanics with the game.  
There is a cubic grid that the snake can move, and to move by the grid we will draw a new part of the snake on the face of her body and delete the last part on the back, so that simulates the move of the snake and when the snake colides with a apple that will do something.

## Game mechanics

But to do a simple game like that we have to understand how to do a game on js, so let's understand the basic.

### Game loop

A game loop will count the frames and by it we will renderize the game drawing and rendering everything every second.  
And to simulate a game, we can use a propriety of the window called .requestAnimationFrame(fn), if you understand portuguese, to check a exemple, is good to check my ["dicionário de js"](https://github.com/kkphoenixgx/JavascriptCourse/blob/master/Aulas/dicionario.md) in Dom -> window and if you don't understand you can look the exemple, It was coded in English. But we don't want to make our game on milliseconds so we have to divide it to know the time in seconds.

#### Draw and  Update

Well, we already designed the gameLoop, so we can use it

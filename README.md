# codepath-prework

Name: John Zhen

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here:
https://www.rapidtables.com/web/color/black-color.html - to find the hexadecimal for light black
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - to learn more about math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push - to learn how to push content into an array.
https://www.zapsplat.com/sound-effect-category/bubbles/- for sfx
https://programminghead.com/how-to-play-audio-in-html-using-javascript/ - to learn audio in html
https://www.w3schools.com/css/css_border.asp - to learn about setting border colors in html.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?
A challenge that I encountered while creating this submission was the last optional task, which was to create a timer that ticks down and limits the time the user has to finish the game.
I struggled to find out how to stop and begin the timer at appropriate times. For example, I wanted to stop the timer when a pattern was playing. I played around with the positioning of
where I should set the interval and clear it. At first, I thought it would be sufficient to just set the interval before the sequence started and then clear it after the sequence ended.
However, the interval kept either ticking down two times as fast, which meant that somewhere in my code I wasn't stopping another interval causing the duration to tick down twice as fast.
So, I narrowed down the code that set the interval to one line and the clearing interval code to one line as well. This way it is impossible for more than one interval to be running at once.
Then I ran into issues of the interval not stopping or playing at the correct times. So I had a look at what might be causing this to happen. The culprit was the setTimeout() that was causing
my interval to not run at appropriate times. I looked into the setTimeout() documentation and then came up with the solution that I can use setTimeout() to line up the times and make it 
so that my intervals are called after the delay, which fixed the problem.

3. What questions about web development do you have after completing your submission?
Some questions about web development I have is in regards to how exactly Javascript is able to manipulate HTML or even CSS(?). My main questions pertain to the more low level stuff. Things like
how does Javascript interact with HTML, what are the underlying processes or code running that allows both to communicate to each other. Furthermore, an important question that is probably
very cliche as well, is what are the good practices of web development? What qualities make a website 'good'? There are many things about web development I am curious about. Databases, how
are they connected to a website and how they interact.

4.If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.
I would like to make the website look more presentable. I believe that a website is something that must look presentable. Currently, this project looks very bland and very static. I would
perhaps incorporate animations that make the website look less static-y. In this case, that would probably have to do with the CSS portion of the website. Adding more features would be good too.
Challenges like maybe the button fades away or allowing the user to adjust the timer or speed would be more challenging.

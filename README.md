# How to run the web
1. Download and install node from https://nodejs.org/en/download/
2. Dowload and install python from https://www.python.org/downloads/
3. Install "ngrok" with npm: npm install -g ngrok
4. With the prompt, go to the "*dist/*" folder and type: *python python -m SimpleHTTPServer 8080*
5. In other prompt, go to the "*dist/*" folder and type: *ngrok http 8080*
6. Now, you can enter the web page using *localhost:8080*, or the url made in nrgok (you can see it in your prompt) if you want to acces it from Internet.

# How to set up grunt config
The project has 2 files, *Gruntfile.js* with some automated tasks (css minify, html minify, js minify, js lint and copy files from src to dist folders) and *package.json* with the npm moduler required.
In the root folder of the project, you can type "npm install" to install all dependencies needed.
For launch the grunt tasks, only type *grunt* (the default task do everything).

# What I made in main.js
I changed the for loop in line 535. I made the document selection before the for loop. This way, the selection is made once and no ever iteration (case inside for loop).
Same change in line 560.

I extracted *noun definitions* from the method, and the same operation with *adjectives*.
# Quickstart

## Install

* Clone this github repo:

```
$ git clone https://github.com/Arials/frontend-nanodegree-mobile-portfolio.git
```

## Running up

*  Download and install node from https://nodejs.org/en/download/
*  Dowload and install python from https://www.python.org/downloads/
*  Install "ngrok" globally with npm: 

```
$ npm install -g ngrok
```

*  With the prompt, go to the "*dist/*" folder and type:

```
$ python python -m SimpleHTTPServer 8080
```

*  In other prompt, go to the "*dist/*" folder and type: 

```
$ ngrok http 8080
```

Now, you can enter the web page using `localhost:8080`, or the url made in nrgok (you can see it in your prompt, something like `http://351f22f0.ngrok.io`) if you want to acces it from Internet.

## How to set up grunt

The project has 2 files, `Gruntfile.js` with some automated tasks (css minify, html minify, js minify, js lint and copy files from **src** to **dist** folders) and `package.json` with the **npm** modules required.

* In the root folder of the project, to install all dependencies needed type:

```
$ npm install
```

* For launch the grunt tasks, only type (the default task do everything).
```
$ grunt
```

## How to build production version

When some changes are made in src, call grunt default task for making the production version of code (on `dist` folder). This tasks include:

* Copy files from dev folder (`src`) to release folder (`dist`)
* CSS minify
* HTML minify
* js minify

To make production version type:
```
$ grunt
```

Production version is in path: `/dist`.

## Notes:

To install **npm**, download and install [Node](https://nodejs.org/en/download/)

# Changes 

## index.html
Changes made in the **Critical Rendering Path**
* Make the font load async:
```html
    <!--Make the font load async-->
    <script async src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    </script>
```

* Only load print.css if you want to print
```html
<link href="css/print.css" rel="stylesheet" media="print">
```

* Compress all images, and reduce dimensions of `src/views/images/pizzeria.jpg` in a new file called `src/views/images/pizzeria-micro.jpg` to be load in the index.html.
* Use of Grunt's tasks for minify:
    - print.css
    - style.css
    - index.html
    - perfmatters.js


## main.js

* In line 535, the `selection` function are now before the for loop. This way, the selection is made once and no ever iteration (case inside for loop).
```js
function changePizzaSizes(size) {
    var select = document.querySelectorAll(".randomPizzaContainer");
    var dx = determineDx(select[0], size);
    var newwidth = (select[0].offsetWidth + dx) + 'px';
    for (var i = 0; i < select.length; i++) {
        select[i].style.width = newwidth;
    }
}
```

* Line 560. Extract from "*for*" the *getElementById*, this way it makes the selections once and not each iteration in for loop

```js
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
  pizzasDiv.appendChild(pizzaElementGenerator(i));
}
```

* Line 615. Reduce the number of pizzas to 24.

```js
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 24; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
}
```

* Extract *noun definitions* from the method, and the same operation with *adjectives*.
# practicing-js
1):
Transform this function declaration to a function expression. The exercise should
be in a file called `1 funcion.js`:
example of function(a, b, c){
return a+b+c}


2):
Transform the following function to a one line arrow function. This exercise
It should end up in a file called `2 arrow.js:
sum = function(a, b){
returns a + b}

3)
The following exercise is based on changing the color of an element of
HTML on click:

<div id="ele1"> hello </div>
<script>
function paint(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", paint);
</script>

3.1. Separate the code into 2 files: 3 paint.html and script.js. The js script should be
inside the assets/js folder. To obtain the score you must deliver the files complying
the structure requested in conjunction with the requirements of 3.2 and 3.3

3.2. Modify the function so that it receives the clicked element so that it does not
having to select it again inside the function. Parachute
get the score, deliver must the 3 paint.html valid running on
set with the modified code.

3.3. Modify the above code to be able to pass a color as an argument to the
paint function. The color should be green (green) by default, when clicking on the
paragraph should pass yellow as color.

4) Build a web page 4_colores.html with the following characteristics
● Create 4 divs that have height and width of 200px and colors blue, red, green and
yellow (insert styles with style attribute). Each of the divs should have
a unique identifier.
● Inside the script add the event so that when one of the divs is clicked,
it changes color to black. Use addEventListener to add the
event. (3 points)
● Create a script that stores a color inside a global variable
depending on the keyboard letter pressed.
○ The letter a will keep the color pink.
○ The letter s will keep the color orange.
○ The letter d will keep the light blue color.
○ Create a new div with the id “key”, 200px wide and tall and
white color and black border.
○ Pressing the a, s or d keys should change the color of the div
“key” to purple, gray or pink respectively.
● Continuing with the logic of the previous point, pressing the q, w or e keys will
you will need to create a new div of the same dimensions as above
with the colors light blue, orange and brown respectively

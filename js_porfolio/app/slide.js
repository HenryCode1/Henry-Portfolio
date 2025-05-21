
    var slider = document.querySelectorAll('.box_content');

    var about = document.querySelector('.about');
   var experience = document.querySelector('.experience');
let counter=0;
   about.addEventListener('click', () => {
runSlide(0)
console.log("hey")
})

experience.addEventListener('click', () => {
runSlide(1)
})
function runSlide(time) {

if (counter < slider.length - 1 || counter == slider.length - 1) {
counter = time;
}
run();
}



function run() {

for (let i = 0; i < slider.length; i++) {

if (counter < slider[0].clientWidth) {
slider[i].style.transform = `translateX(${counter * -100}%)`;

} else {
counter = 0;
}
}

}
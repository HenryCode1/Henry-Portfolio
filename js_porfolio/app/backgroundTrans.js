const toggleSwitch = document.getElementById('toggle-switch');


toggleSwitch.addEventListener('change', () => {
    var t=document.querySelector('.robot');
    t.classList.toggle('dark-mode');
    var rob=document.querySelector('.rob');
    rob.classList.toggle('blue-mode');
    var nav=document.querySelector('.nav');
    nav.classList.toggle('dark-mode');
    var downloadr=document.querySelector('.btn');
    downloadr.classList.toggle('blue-mode');
  document.body.classList.toggle('dark-mode');

});
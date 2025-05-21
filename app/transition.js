window.onload=()=>{
    const trans=document.querySelector('.loader');
   
    setTimeout(()=>{
        trans.classList.remove('is_active');
    },500)
   
}

const downloadButton = document.querySelector('.btn');
const downloadIcon = document.querySelector('.download-icon');


let url=document.querySelector('.downloadbtn');


var root='ftp/file/edeh henry udo simple cv.pdf';

var title= 'CV';





downloadButton.addEventListener('click', () => {

  downloadIcon.classList.add('animate-icon');
  setTimeout(() => {
   url.href=root;
     url.download=title;
    url.click(); 
  }, 3000);


  setTimeout(() => {
    downloadIcon.classList.remove('animate-icon');
  }, 2000);
});
const downloadButtons = document.querySelector('.btnsss');
const downloadIcons = document.querySelector('.download-icons');

downloadButtons.addEventListener('click', () => {
  downloadIcons.classList.add('animate-icon');
  
   url.href=root;
   url.download=title;
    url.click(); 
  
  setTimeout(() => {
    
    downloadIcons.classList.remove('animate-icon');
  }, 2000);
});


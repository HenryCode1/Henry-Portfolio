
const showAutoWrite=document.querySelector("#showText");
 const container=['Hello, you`re welcome to My portfolio..'
 ,'i`m a front and backend engineer who creates internet applications',
 'The features here include Home, explore,Contact and Download Resume .. ',
 
 'Thanks ...'];
 
 let r=0;
 let l=0;
 let index=0;
 let bucket=container[index];

 function A_W(){
   if(r  > bucket.length){
     setTimeout(A_W_D,100);
   }else{
       showAutoWrite.innerHTML=bucket.substring(0,r+=1);   setTimeout(A_W,90);
   }
 }
 function A_W_D(){
    if( r < 0 ){
      if(l < container.length-1){++l}else{l=0;}
      bucket=container[l];
      setTimeout(A_W,100);
    }else{showAutoWrite.innerHTML=bucket.substring(0,r-=1);
      setTimeout(A_W_D,20);
    }
 }
 A_W();
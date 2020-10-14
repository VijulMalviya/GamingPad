


document.querySelector('.menu-icon').addEventListener('click', function(){
 
  if(document.querySelector('.nav ul').style.maxHeight == '160px'){
    document.querySelector('.nav ul').style.maxHeight = '0px';
    document.querySelector('ul').style.opacity = '0';
  }else{
  
    document.querySelector('.nav ul').style.maxHeight = '160px';
    document.querySelector('ul').style.opacity = '1';
  }
})
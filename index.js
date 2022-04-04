
var no=document.querySelectorAll('button').length;
for(var i=0;i<no;i++)
document.querySelectorAll("button")[i].addEventListener('click',function ()
{
  var no=this.innerHTML;
  makeSound(no);
  buttonAnimation(no);
});



document.addEventListener("keydown",function(event){
  var k=event.key;
  makeSound(k);
  buttonAnimation(k);
})

function makeSound(no)
{
  switch(no){
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;  
      case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break; 
      case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break; 
      case "j":
      var tom5=new Audio("sounds/snare.mp3");
      tom5.play();
      break; 
      case "k":
      var tom5=new Audio("sounds/crash.mp3");
      tom5.play();
      break; 
      case "l":
      var tom5=new Audio("sounds/kick-bass.mp3");
      tom5.play();
      break; 
  }
}


function buttonAnimation(key)
{
 var active= document.querySelector("."+key);
 active.classList.add("pressed");
  setTimeout(() => {
    active.classList.remove("pressed");
  }, 100);
}
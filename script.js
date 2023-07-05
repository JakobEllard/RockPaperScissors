var cpu=0
var wins =0
var losses=0
var draws=0
document.getElementById('rock').addEventListener('click', function () {
   cpu=Math.floor(Math.random()*299+1)
  if(cpu<=100){
draws++
    document.getElementById('draws').innerHTML="Draws:" + draws 
    document.getElementById('crock').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }else if(cpu<=200){
    losses++
    document.getElementById('losses').innerHTML="Losses:" + losses 
    document.getElementById('cpaper').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('crock').style.display="none"
  }else{
    wins++
    document.getElementById('wins').innerHTML="Wins:" + wins
    document.getElementById('cscissors').style.display="block"
    document.getElementById('crock').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }
 })

document.getElementById('paper').addEventListener('click', function () {
cpu=Math.floor(Math.random()*299+1)
  if(cpu<=100){
wins++
document.getElementById('wins').innerHTML="Wins:" + wins 
     document.getElementById('crock').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }else if(cpu<=200){
    draws++
    document.getElementById('draws').innerHTML="Draws:" + draws 
    document.getElementById('cpaper').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('crock').style.display="none"
  }else{
    losses++
     document.getElementById('losses').innerHTML="Losses:" + losses 
    document.getElementById('cscissors').style.display="block"
    document.getElementById('crock').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }
 })

document.getElementById('scissors').addEventListener('click', function () {
   cpu=Math.floor(Math.random()*299+1)
  if(cpu<=100){
losses++
     document.getElementById('losses').innerHTML="Losses:" + losses 
     document.getElementById('crock').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }else if(cpu<=200){
    wins++
     document.getElementById('wins').innerHTML="Wins:" + wins 
    document.getElementById('cpaper').style.display="block"
    document.getElementById('cscissors').style.display="none"
    document.getElementById('crock').style.display="none"
  }else{
    draws++
    document.getElementById('draws').innerHTML="Draws:" + draws 
     document.getElementById('cscissors').style.display="block"
    document.getElementById('crock').style.display="none"
    document.getElementById('cpaper').style.display="none"
  }
 })
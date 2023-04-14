function outline(){
    document.getElementById("tail").style.textDecoration="none"
}
function overline(){
    document.getElementById("tail").style.textDecoration="underline"
    document.getElementById("tail").style.textDecorationColor="#44ffa1"
}
function applyLine(){
    document.getElementById("Apply").style.textDecoration="none"
}
function applyNone(){
    document.getElementById("Apply").style.textDecoration="underline"
    document.getElementById("Apply").style.textDecorationColor="#44ffa1"
}
function changeImage(x,image){
    if(x==1)
    {
        image.src = "./images/pexels-sindre-fs-1040881-removebg-preview.png";
    }
    if(x == 2)
    {
        image.src = "./images/pexels-photo-1040880-removebg-preview.png";
    }
}
function show(){
    document.getElementById("More").style.display="flex"
    // document.getElementById("Learn").style.display="none"
}
function changColor(){
    document.getElementById("change").style.backgroundColor="white"
    document.getElementById("change").style.color="rgb(35, 18, 48)"
}
function staColor(){
    document.getElementById("change").style.backgroundColor="#44ffa1"
    document.getElementById("change").style.color="rgb(35, 18, 48)"
}
function changeColor(){
    document.getElementById("Learn").style.backgroundColor="white"
    document.getElementById("Learn").style.color="rgb(35, 18, 48)"
}
function stayColor(){
    document.getElementById("Learn").style.backgroundColor="#44ffa1"
    document.getElementById("Learn").style.color="rgb(35, 18, 48)"
}
   


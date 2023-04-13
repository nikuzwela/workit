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
const parentContainer =document.querySelector('.this');
parentContainer.addEventListener('click', event=>{
    const current = event.target;
    
})


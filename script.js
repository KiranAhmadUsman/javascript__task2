const text=document.getElementById('text');
const button=document.getElementById('button');
button.addEventListener('click',function(){
    if(text.innerText==="Not a Friend"){
        text.innerText='Friends';
        text.style.color="green";
        button.innerText="Remove Friend";
    }else{
        text.innerText='Not a Friend';
        text.style.color="red";
        button.innerText="Add Friend";

    }
   
})
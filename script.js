let mypara= document.getElementById('p1');
let myframe= document.getElementById('frame');
let mybody=document.getElementById('mybody');
let myvar=0;
 
function loading()
{   
    console.log('inside the load');
    myframe.style.display='block';
    mybody.style.display='block';
    window.onscroll = function () { window.scrollTo(0, 0); };
    setTimeout(function(){
       
        myframe.style.display='none';
        window.onscroll='enabled';
        
    },5000);
}

mypara.innerHTML="Software engineer";
function intro()
{
    console.log('inside');
    
    // let delaytime=2000

    setInterval(function(){
        mypara.style.transition="0.3s";
        mypara.style.color="blue";
        mypara.innerHTML="Web Developer";
    },2000)
    setInterval(function(){
            
        mypara.style.color="darkmagenta";
        mypara.innerHTML="Tech Geeek";
        mypara.style.transition="0.3s";
        
    },4000);
    console.log('inside the if condition');

    setInterval(function(){
        mypara.innerHTML="Software Developer";
        mypara.style.color="darkslateblue";
        mypara.style.transition="0.3s";
    },5000);

    console.log('inside another condtion');

    setInterval(function(){
    
    mypara.innerHTML="Competitive Programer";
    mypara.style.color="black";
    mypara.style.transition="0.3s";

    },7000);
    
    setInterval(function(){
        mypara.innerHTML="Music lover";
        mypara.style.color="darkred";
        mypara.style.transition="0.3s";

    },9000);
}


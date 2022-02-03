let mypara= document.getElementById('p1');

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
            
        mypara.style.color="#0B7307";
        mypara.innerHTML="Tech Geeek";
        mypara.style.transition="0.3s";
        
    },4000);
    console.log('inside the if condition');

    setInterval(function(){
        mypara.innerHTML="Software Developer";
        mypara.style.color="red";
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
        mypara.style.color="magenta";
        mypara.style.transition="0.3s";

    },9000);
}
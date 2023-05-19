const ed="20 May 2023 12:00 AM"
document.getElementById("ED").innerHTML=ed;
const inputs=document.querySelectorAll("input")
function clock()
{
    const end=new Date(ed);
    const now=new Date();
    console.log(end);
    console.log(now);
    const dif=(end-now)/1000;
    console.log(dif)
    inputs[0].value=Math.floor(dif/(60*60*24));
    inputs[1].value=Math.floor(dif/3600)%24;
    inputs[2].value=Math.floor(dif/60)%60;
    inputs[3].value=Math.floor(dif%60);
    
}
//initial call
clock();
setInterval(
    ()=>{
        clock()
    },1000
)
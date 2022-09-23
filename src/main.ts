import './style.css'
const eyes=document.querySelectorAll<HTMLElement>(".eye");
const anchor=document.getElementById("sourc");
const rekt=anchor?.getBoundingClientRect();
const anchorx:any=rekt?.left?+rekt.width/2:0;
const anchory:any=rekt?.top?+rekt.height/2:0; 
document.addEventListener('mousemove',(e)=>{
  
  const x=e.clientX;
  const y=e.clientY;

  
  const angleDeg=angle(x,y,anchorx,anchory);
  console.log(angleDeg);
   
  eyes.forEach(eye=>{
    eye.style.transform=`rotate(${angleDeg}deg)`;
    anchor!.style.filter=`hue-rotate(${angleDeg}deg)`;
})
})

function angle(cx:number,cy:number,ex:number,ey:number){
  const dx=ex-cx;
  const dy=cy-ey;
  const rad=Math.atan2(dx,dy);
  const deg=rad*180/Math.PI;
  return deg;
}
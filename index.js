let btn1=document.getElementById("b1");
let btn2=document.getElementById("b2");
let btn3=document.getElementById("b3");
let btn4=document.getElementById("b4");


let pant1=document.getElementById("pant1");
let pant2=document.getElementById("pant2");
let pant3=document.getElementById("pant3");
let pant4=document.getElementById("pant4");

btn1.addEventListener("click" , function(){

pant1.src="pantss/pants1.jpeg";
pant2.src="pantss/pants2.jpeg";
pant3.src="pantss/pants3.jpeg";
pant4.src="pantss/pants4.jpeg";

document.body.style.background="red";
})





btn2.addEventListener("click" , function(){
    pant1.src="pantss/te1.webp";
    pant2.src="pantss/te2.jpg";
    pant3.src="pantss/te3.png";
    pant4.src="pantss/te4.jpg";

    
    document.body.style.background="gray";
    })
    


 

btn3.addEventListener("click" , function(){
    
   

    pant1.src="pantss/soc1.webp";
    pant2.src="pantss/soc2.avif";
    pant3.src="pantss/soc3.jpg";
    pant4.src="pantss/soc4.jpg";

    document.body.style.background="blue";
    })
   


   
    
    btn4.addEventListener("click" , function(){
        

        pant1.src="pantss/shi1.jpeg";
        pant2.src="pantss/shi2.jpeg";
        pant3.src="pantss/shi3.jpeg";
        pant4.src="pantss/shi4.jpeg";

        document.body.style.background="brown";
        })
        
const navToggle= document.querySelector(".nav-toggle");
const links= document.querySelector(".links");
navToggle.addEventListener("click",function(){
 //console.log(links.classList.contains("random"));   
 //if(links.classList.contains("show-links"))
// {
    // links.classList.remove("show-links");
// }
 //else{
     //links.classList.add("show-links");
 //}
 //can be done in just 1 line below 
 links.classList.toggle("show-links");
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



// typing effect of name
var dynamicText = document.getElementById('app');

var Typewriter = new Typewriter(dynamicText,{
  loop: true, 
  delay: 75,
});

Typewriter
    .pauseFor(1000)
    // .typeString("a software developer")
    // .pauseFor(2000)
    // .deleteChars(20)
    // .pauseFor(200)
    .typeString("Tiffany Lin")
    .pauseFor(5000)
    .start()



// ACCORDION
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
  accordionContent.forEach((item2, index2) => {
      if(index1 != index2){
          item2.classList.remove("open");

          let des = item2.querySelector(".description");
          des.style.height = "0px";
          item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
  })
}


// scroll to top functionality

// selects the scroll-to-top button with the id attribute attached to it in the HTML
const scrollUp = document.querySelector("#scroll-up");

// eventListener to get the user's click action and exploit the scrollTo part of the windows object 
// to make the button functional
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// selects the hamburger menu bars
const burger = document.querySelector("#burger-menu");
// selects the list items ( the nav links altogether )
const ul = document.querySelector("nav ul");
// selects the container itself (the nav element)
const nav = document.querySelector("nav");

// toggle the nav ul.show class whne the user clicks the hamburger menu bar 
// using the toggle mehtod to remove and add the class of show 
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
// the nav links have a class of nav-link from the html
// this selects all the elements with the nav-link class
const navLink = document.querySelectorAll(".nav-link");

// looping through all the link to listen for a click event on all of them
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    // remove the class of show when any of the nav menu items are clicked
    // this will take all the list items out of the viewport 
    ul.classList.remove("show");
  })
);


const collapsibleBtns = document.querySelectorAll('.collapsible-icon');
const collapsibleContents = document.querySelectorAll('.content');

collapsibleBtns.forEach((btn, btnIdx) => {
    btn.addEventListener('click', () =>{
        let icon = btn.firstElementChild;
        if(icon.classList.contains('fa-chevron-down')){
            icon.className = 'fa fa-chevron-up';
            collapsibleContents.forEach((content, contentIdx) => {
                if(btnIdx == contentIdx){
                    content.classList.add('content-show');
                }
            })
        } else if(icon.classList.contains('fa-chevron-up')){
            icon.className = 'fa fa-chevron-down';
            collapsibleContents.forEach((content, contentIdx) => {
                if(btnIdx == contentIdx){
                    content.classList.remove('content-show');
                }
            });
        }
    })
});
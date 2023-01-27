var menuItems = document.querySelectorAll('.tri > *');
var allProjects =document.querySelectorAll('.projects > *');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('.active');
        element.classList.add('.active');
        });
});



// if (projects.querySelector){}

// document.getElementById("show").onclick = function() {
//     document.getElementById("register").style.display = "block";
// }
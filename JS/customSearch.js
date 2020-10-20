//get user input 
let userInput = document.getElementById('user_search');
let gallery = document.getElementById('gallery');


// User input value
user_search.addEventListener("keyup", e => { 
    const searchString = e.target.value.toUpperCase(); 
    console.log([userInput])
// for any input check the data caption (upperCase sensitive)
for (let count = 0; count < gallery.length; count++) {
    const userInput = gallery[count].getAttribute('data-caption').toUpperCase()
    
// if user includes letters or name block the image on screen
     if (userInput.includes(searchString)) {
        gallery[count].style.display = 'block';
            
// if nothing matches display no image
    } else {
        gallery[count].style.display = 'none';
        }
    }
});

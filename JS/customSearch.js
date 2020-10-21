//get user input 
let userInput = document.getElementById('user_search');
let gallery = document.getElementById('gallery');

//search function
function search(userInput){
    for(let i = 0; i < gallery.length; i++){
        userInput = userInput.toUpperCase();
        const caption = gallery[i].getAttribute('data-caption').toUpperCase();
        if(userInput.includes(caption)){
            gallery[i].style.display = 'block';
        }
        else{
            gallery[i].style.display = 'none';
        }
    }
}

//call search function on keyup when focus is user_search
user_search.addEventListener("keyup", search());


let $body = document.querySelector('body');
let $paragraph = document.querySelector('.text');
let $div = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', function(){
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json())
    .then(categories => {
        for(let i = 0; i < categories.length; i++){
            
            let button = document.createElement('button');
            button.textContent = categories[i];
            button.classList.add('buttons');
        
            $div.appendChild(button);
            $body.appendChild($div);
        }
    })


    let buttons = document.querySelectorAll("button")
  
    .then(repsp => {
        

        })
    
});

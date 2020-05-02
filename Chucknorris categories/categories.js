let $body = document.querySelector('body');
let $paragraph = document.querySelector('.text');
let $div = document.querySelector('.btn');


// DOMContentLoaded
// load

document.addEventListener('DOMContentLoaded', function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.chucknorris.io/jokes/categories');
    request.send();
    
    request.addEventListener('load', function () {
        let categories = JSON.parse(request.responseText);
        
        for(let i = 0; i < categories.length; i++){
            let button = document.createElement('button');
            button.textContent = categories[i];
            button.classList.add('buttons');
            
            $div.appendChild(button);
            $body.appendChild($div);
        }
        
        let buttons = document.querySelectorAll("button");
        
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function(){
                let search = categories[i];
                let requestt = new XMLHttpRequest();
                requestt.open('GET', 'https://api.chucknorris.io/jokes/random?category=' + search);
                requestt.send();

                requestt.addEventListener('load', function(){
                    jake = JSON.parse(requestt.responseText);
                    
                    $paragraph.textContent = jake.value
                    $body.appendChild($paragraph);
                });
                
                
            });
        };
    });
    
});

// let, const, var, hoisting, scope, declaration, inicialization

// for loop
       // document.createEleement('button')
       // text content => res[i]
       // add on page

// alert => button text

















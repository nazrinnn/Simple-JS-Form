function animatedForm(){
const arrows=document.querySelectorAll("*.fa-arrow-down");


arrows.forEach(arrow => {
    arrow.addEventListener('click',()=> {
        const input= arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm= parent.nextElementSibling;
        
        //Check for validation
        if(input.type ==="text" && validateUser(input)){
            nextSlide(parent, nextForm);
        }
        else if(input.type === "email"  && validateUser(input)){
            nextSlide(parent, nextForm);
        }
        else if(input.type === "password"  && validateUser(input)){
            nextSlide(parent, nextForm);
        }
        else{
            parent.style.animation="shake 0.5s ease";
        }
        parent.addEventListener('animationend',()=>{
            parent.style.animation="";
        });
        

    });
});

}

function validateUser(user){
    if(user.value.length <6 ){
        console.log('Not enough characters');
        error('#ec4646');

    }
    else{
        error('#a3ddcb');
        return true;
    }
}


function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');


}

function error(color){
    document.body.style.background=color;
}

animatedForm();
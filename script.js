var Name = document.getElementById('name');
var email = document.getElementById('email');
var msg = document.getElementById('msg');
const success = document.getElementById('success');
const danger = document.getElementById('danger');


function message(){
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{

        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';     
           },2000);

            success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000);

    
}
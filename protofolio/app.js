const btn = document.querySelector('#subbtn');
const submitMsg = document.querySelector('.submitted');
const name = document.querySelector('#name') ;
const message = document.querySelector('#message');
const email = document.querySelector('#email');
const nr = document.querySelector('#nr');
const mr = document.querySelector('#mr');
const er = document.querySelector('#er');

function clicked(){
    if(name.value == '' || email.value == '' || message.value == ''){

        alert("Please fill the form");
    }else{
        submitMsg.innerHTML = "Succesfully Submitted!!!!";
    nr.innerHTML = name.value ;
    er.innerHTML = email.value;
    mr.innerHTML = message.value;
    document.querySelector(".formReply").classList.add("disform");
    }
}   
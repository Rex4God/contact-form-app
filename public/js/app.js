const contactForm =document.querySelector('.contact-form');

   let firstName =document.getElementById('first_name');
   let middleName =document.getElementById('middle_name');
   let lastName =document.getElementById('last_name');
   let phone =document.getElementById('phone');
   let email =document.getElementById('email');
   let subject =document.getElementById('subject');
   let message=document.getElementById('message');


contactForm.addEventListener('submit',(e)=>{
   e.preventDefault() ;

   let formData ={
       firstName: firstName.value,
       middleName: middleName.value,
       lastName: lastName.value,
       phone:  phone.value,
       email:  email.value,
       subject: subject.value,
       message: message.value
   }
   let xhr = new XMLHttpRequest();
   xhr.open('POST','/');
   xhr.setRequestHeader('content-type','application/json');
   xhr.onload = function(){
       console.log(xhr.responseText);
       if(xhr.responseText =='success'){
       alert('Email sent');
       firstName.value ='';
       middleName. value ='';
       lastName.value ='';
       phone.value ='';
       email.value ='';
       subject.value ='';
       message.value ='';
   }else{
       alert('something went wrong why sending the mail');
   }
}
xhr.send(JSON.stringify(formData));
})
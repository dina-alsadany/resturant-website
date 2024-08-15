function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("fname").value;

    // Displaying the value
    alert(inputVal);
}

function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("lname").value;

    // Displaying the value
    alert(inputVal);
}

function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("email").value;

    // Displaying the value
    alert(inputVal);
}

function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("sub").value;

    // Displaying the value
    alert(inputVal);
}

function getTextareaValue() {
    // Selecting the input element and get its value 
    var textareaVal = document.getElementById("msg").value;

    // Displaying the value
    alert(inputVal);
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  /*===== Mob-Menu =====*/
const menu=document.querySelector('.mob-menu');
const overlay2=document.querySelector('.overlay-2');
const btnCloseMenu=document.querySelector('.close-menu');
const btnOpenMenu=document.querySelector('.menu-mob');

const openMenu=function(){
    menu.classList.remove('hid-2');
    overlay2.classList.remove('hid-2');
}

const closeMenu=function(){
    menu.classList.add('hid-2');
    overlay2.classList.add('hid-2');
}

btnOpenMenu.addEventListener('click', openMenu)

btnCloseMenu.addEventListener('click' , closeMenu )
overlay2.addEventListener('click' , closeMenu );
/* Validate if constant exists */
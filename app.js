// import functions
const noun1Input = document.getElementById('noun-1-input');
const noun2Input = document.getElementById('noun-2-input');
const verb1Input = document.getElementById('verb-1-input');
const verb2Input = document.getElementById('verb-2-input');
const adjective1Input = document.getElementById('adjective-1-input');
const noun3Input = document.getElementById('noun-3-input');
const submitButton = document.getElementById('submit-button');
const noun1 = document.getElementById('noun-1');
const noun2 = document.getElementById('noun-2');
const verb1 = document.getElementById('verb-1');
const verb2 = document.getElementById('verb-2');
const adjective1 = document.getElementById('adjective-1');
const noun3 = document.getElementById('noun-3');
 
submitButton.addEventListener('click', change);

function change() {
    noun1.textContent = noun1Input.value;
    noun2.textContent 

}


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

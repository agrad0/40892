


const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.getElementsByName("fname")[0];
    let lastName = document.getElementsByName("lname")[0];

    console.log(`${firstName.value} ${lastName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);
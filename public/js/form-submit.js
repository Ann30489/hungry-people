let inpTel = document.getElementById("phone");
let phoneVal = inpTel.value;
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let username = document.getElementById("username");
let password = document.getElementById("password");
let emailVal = document.getElementById("email");
let textVal = document.getElementById("comment");
let btnSubmit = document.getElementById("btn-submit");
const form = document.getElementById("form");


// Restrict input values for phone number
inpTel.oninput = function () {
  this.value = this.value.replace(/[^0-9\+\-\`(`\`)`]/g, '');
};

// Modal window after submitting the form
const btnModal = document.getElementById('modal-button');
const modal = document.getElementById('modal-container');
let modalMessage = document.getElementById("modal-text");
let contact = document.getElementById("contact");
let titleContact = document.getElementById("contact-title");

// Function to open the modal box
function showModal() {
  modal.classList.add('animation-modal');
  modal.style.display = 'block';
  titleContact.classList.add('title-modal');
}

// Function to close modal box
function closeModal() {
  modal.style.display = 'none';
  titleContact.classList.remove('title-modal');
}

btnModal.addEventListener('click', closeModal);

function sendRequest(method, url, body) {
  const headers = { "Content-Type": "application/json" };

  return fetch(url, {
    method: method,
    body: body,
    headers: headers,
  }).then(response => response.json())
    .then(json => {
      modalMessage.innerHTML = JSON.stringify(json.message["en"]).replace(/\"/g, "") + "!";
      showModal();
    })
}


btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const requestURL = "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";

  const requestData = {
    role: 2,
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value,
    username: form.elements.username.value,
    password: form.elements.password.value,
    language: "ua",
    active: true,
  };

  const userJSON = JSON.stringify(requestData);

  sendRequest("POST", requestURL, userJSON);
});



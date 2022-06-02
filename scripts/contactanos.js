window.addEventListener('DOMContentLoaded', () => {
  console.log('La página esta cargada')

  const title = document.querySelector('h1')
  const myForm = document.querySelector('form')
  const inputName = myForm.querySelector('#name')
  const inputLastName = myForm.querySelector('#lastname')
  const inputPhone = myForm.querySelector('#phone')
  const inputEmail = myForm.querySelector('#email')
  const inputQuestion = myForm.querySelector('#question')
  const submitButton = myForm.querySelector('#submit')


  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const contact = {
      name: inputName.value,
      lastname: inputLastName.value,
      phone: inputPhone.value,
      email: inputEmail.value,
      question: inputQuestion.value,
    }

    const read = JSON.parse(window.localStorage.getItem('contact')) || [];
    const dataSaved = [...read, contact];
    window.localStorage.setItem('contact', JSON.stringify(dataSaved));
    
  })
})


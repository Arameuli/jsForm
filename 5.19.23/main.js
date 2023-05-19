const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const mailtoLink = 'mailto:your-email@nikasokha7@gmail.com'

    window.location.href=mailtoLink
})

function allert(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

      if (name !== "" && email !== "" && message !== "") {
        let yesOrNo = prompt("Do you want to save your data?");
        if(yesOrNo == "yes"){
            alert("your data is saved");
        }
        else alert("we won't save your data")
      }
}
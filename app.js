const form = document.querySelector('.email-entry');
const input = document.querySelector('#email');
const errorMsg = document.querySelectorAll('.error');



form.addEventListener('submit', function (e) {
    e.preventDefault;
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = input.value.test(emailFormat);
    if (!email) {
        console.log("ERROR");
        // errorMsg.classList.remove('hidden');
    }
})

const emailBtn = document.getElementById('emailBtn');
const telfBtn = document.getElementById('telfBtn');
const mailPopup = document.getElementById('mailPopup');
const telfPopup = document.getElementById('telfPopup');
const closeBtns = document.querySelectorAll('.closePopUp');

const showPopup = (popup) => {
    popup.style.display = 'flex';
};

const closePopUps = () => {
    mailPopup.style.display = 'none';
    telfPopup.style.display = 'none';
};

emailBtn.addEventListener('click', () => showPopup(mailPopup));
telfBtn.addEventListener('click', () => showPopup(telfPopup));

closeBtns.forEach((button) => {
    button.addEventListener('click', closePopUps);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopUps();
    }
});
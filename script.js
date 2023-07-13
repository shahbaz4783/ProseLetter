const joinBtn = document.getElementById('join');
const formBox = document.getElementById('submit-form');
const closeFormBox = document.getElementById('close');

formBox.style.display = 'none';

const showSubmitBox = () => {
    formBox.style.display = 'flex';
}

const closeForm = () => {
    formBox.style.display = 'none';
}

joinBtn.addEventListener('click', showSubmitBox)
closeFormBox.addEventListener('click', closeForm)
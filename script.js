const joinBtn = document.getElementById('join');
const formBox = document.getElementById('submit-form');
const closeFormBox = document.getElementById('close');
const section = document.querySelector('section');

formBox.style.display = 'none';

const showSubmitBox = () => {
    formBox.style.display = 'flex';
    section.classList.add('blurBackground');
}

const closeForm = () => {
    formBox.style.display = 'none';
    section.classList.remove('blurBackground');
}

joinBtn.addEventListener('click', showSubmitBox)
closeFormBox.addEventListener('click', closeForm)
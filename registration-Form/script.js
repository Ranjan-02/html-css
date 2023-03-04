const signInBtnlink = document.querySelector('.signInBtn-link')
const signUpBtnlink = document.querySelector('.signUpBtn-link')
const wrapper = document.querySelector('.wrapper')

signUpBtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});
signInBtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});
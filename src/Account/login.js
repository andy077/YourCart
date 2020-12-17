
const login = () => {

    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('regForm');
    const activeForm = document.getElementById('active_form');

    regForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    activeForm.style.transform = 'translateX(0px)';
}

export default login;
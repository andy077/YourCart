

const register = () => {

    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('regForm');
    const activeForm = document.getElementById('active_form');

    regForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    activeForm.style.transform = 'translateX(100px)';
    
}

export default register;
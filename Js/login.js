const btnLogin = document.querySelector('.btn--login');
const txtUserName = document.getElementById('username');
const txtPassWord = document.getElementById('password');
const errUserName = document.querySelector('.err-username');
const errPassWord = document.querySelector('.err-password');


txtUserName.addEventListener('blur', () => {
    if (txtUserName.value.trim() === '') {
        errUserName.innerHTML = 'Username không được bỏ trống!'
    }  else {
        errUserName.innerHTML = ''
    }
})
txtPassWord.addEventListener('blur', () => {
    if (txtUserName.value.trim() === '') {
        errPassWord.innerHTML = 'Password không được bỏ trống!'
    }  else {
        errPassWord.innerHTML = ''
    }
})

const checkLogOut = false;

btnLogin.addEventListener('click', () => {
    let isValid = true; // Flag to track overall form validity

    // Validate username
    if (txtUserName.value.trim() === '') {
        errUserName.innerHTML = 'Username không được bỏ trống!';
        isValid = false;
    } 

    // Validate password
    if (txtPassWord.value.trim() === '') {
        errPassWord.innerHTML = 'Password không được bỏ trống!';
        isValid = false;
    }

    // Check if the entered username and password match the values stored in localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (txtUserName.value.trim() === storedUsername && txtPassWord.value.trim() === storedPassword) {
        // Redirect to homepage if the login is successful
        window.location.href = 'index.html';
        localStorage.setItem('checkLogOut', true);
    } else {
        // Display an error message if the login fails
       alert('Tên đăng nhập hoặc mật khẩu của bạn không đúng')
        isValid = false;
    }
});



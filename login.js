    // Name and Password from the register-form
    var nameLogin = document.getElementById('nameLogin');
    var loginPwd = document.getElementById('loginPwd');


    // storing input from register-form
    function registerPage() {
        console.log("hello you are in registerPage function");
       
        localStorage.setItem('nameLogin', nameLogin.value);
        localStorage.setItem('loginPwd', loginPwd.value);
        if (nameLogin.value === "" && nameLogin.value === ""){
            alert("Null values are entered");
        }else {
            alert('Registration is successful');
        }
       
    }

  
    // check if stored data from register-form is equal to entered data in the   login-form
    function evalatePage() {
        console.log("hello you are in evalatePage function");

        // stored data from the register-form
        var storedName = localStorage.getItem('nameLogin');
        var storedPw = localStorage.getItem('loginPwd');

        console.log(storedName);
        console.log(storedPw);


        // entered data from the login-form
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPwd');


        console.log(userName);
        console.log(userPw);

        // check if stored data from register-form is equal to data from login form
        if(userName.value  ===  storedName && userPw.value  ===  storedPw) {
            alert('You are loged in successfully');
        }else {alert('Looks like you are a invalid user ! please register first to login');

    }
}
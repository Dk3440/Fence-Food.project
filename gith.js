
        function validation() {

        event.preventDefault()

        var username = document.getElementById('username').value;
        var number = document.getElementById('number').value;
        var Email = document.getElementById('Email').value;
        var Password = document.getElementById('Password').value;


        var usercheck = /^[A-za-z]{5,30}$/;
        var mobilecheck = /^[1-9]\d{9}$/;
        var EmailAddcheck = /^\S+@\S+\.\S+$/;
        var pas = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


        
        if (usercheck.test(username)) {
            document.getElementById('nameerror').innerHTML = "";
        } else {
            document.getElementById('nameerror').innerHTML = "** Username is invlaid";

        }

        
        if (mobilecheck.test(number)) {
            document.getElementById('phoneerror').innerHTML = "";
        } else {
            document.getElementById('phoneerror').innerHTML = "** Number is not vailed";

        }

        
        if (EmailAddcheck.test(Email)) {
            document.getElementById('emailerror').innerHTML = "";
        } else {
            document.getElementById('emailerror').innerHTML = "** Email is not wailed";


        }

        if (pas.test(Password)) {
            document.getElementById('passerror').innerHTML = "";
        } else {
            document.getElementById('passerror').innerHTML = "** Password is not wailed";

        }

            return false;

        }
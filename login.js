var attempt = 3;    
    function validate(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var username_error = document.getElementById("username_error");
        var pass_error = document.getElementById("pass_error");
        pass_error.style.display="none";
        username_error.style.display="none";

        if ( username == "admin" && password=="user") 
        {
  
            window.location = "success.html";
            return false;
        }
        else {
            attempt--;
            alert("You have "+attempt+" attempts left;");
            if( attempt == 0){
                alert("System is locked!!!;");
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
            }
            if(username!="admin")
            {
                username_error.style.display="block";
            }
            if(password!="user")
            {
                pass_error.style.display="block";
            }
            return false;
        }
    }
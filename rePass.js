function resetPass(){
    var password=document.getElementById("pass").value;
    var cpassword=document.getElementById("cpass").value;
    var newPassword;

    conf_error.style.display="none";
    pass_suc.style.display="none";

    if(password!=cpassword)
    {
        conf_error.style.display="block";
        return false;
    }
    else
    {
        newPassword=password;
        pass_suc.style.display="block";
        return false;
    }
}
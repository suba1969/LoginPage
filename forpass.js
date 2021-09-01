function forPassword(){
    
    var question=document.getElementById("ques").value;
    var answer=document.getElementById("ans").value;
    ques_error.style.display="none";
    ans_error.style.display="none";
    if(question=="-1")
    {
        ques_error.style.display="block";
        return false;
    }
    if(question=="1")
    {
        if(answer.toLowerCase()=="ideal")
        {
            window.location="resetPass.html";
            return false;
        }
        else
        {
            ans_error.style.display="block";
            return false;
        }
    }
    if(question=="2")
    {
        if(answer.toLowerCase()=="tommy")
        {
            window.location="resetPass.html";
            return false;
        }
        else
        {
            ans_error.style.display="block";
            return false;
        }
    }

}
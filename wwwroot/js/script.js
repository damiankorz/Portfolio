//Client-side validation for contact form 
function validateForm(){
    var Name = document.forms['contactForm']['Name'].value;
    var Email = document.forms['contactForm']['Email'].value;
    var Content = document.forms['contactForm']['Content'].value;
    if (Name == ""){
        alert("Name is required");
        return false;
    }
    else if(Email == ""){
        alert("Email is required");
        return false;
    }
    else if(Content == ""){
        alret("Content is required");
        return false;
    }
}

//Remove default white hover on nav links 
$(document).ready(function(){
    $('.nav-links').mouseenter(function(){
        $(this).css("font-style", "italic")
    })
    $('.nav-links').mouseout(function(){
        $(this).css("font-style", "normal")
    })
});
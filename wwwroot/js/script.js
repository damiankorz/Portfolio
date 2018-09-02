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

//Change color of nav links on hover
$(document).ready(function(){
    $('.nav-links').mouseenter(function(){
        $(this).css("color", "#0c8681")
    })
    $('.nav-links').mouseout(function(){
        $(this).css("color", "white")
    })
});
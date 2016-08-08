var phoneShowing = false;
var fileShowing = false;
var peaceShowing = false;

showContact = function(){
  if(phoneShowing){
    document.getElementById('contact').innerHTML= "<h1>Contact Me<\/h1>";
    phoneShowing = false;
  }
}

showPhoneIcon = function(){
  if(!phoneShowing){
    document.getElementById('contact').innerHTML = "<i class=\"fa fa-phone\"><\/i>";
    phoneShowing = true;
  }
}

showResume = function(){
  if(fileShowing){
    document.getElementById('resume').innerHTML="<h1>Resume<\/h1>";
    fileShowing = false;
  }
}

showFileIcon = function(){
  if(!fileShowing){
      document.getElementById('resume').innerHTML = "<i class=\"fa fa-file-text-o\"><\/i>";
      fileShowing=true;
  }
}

showAboutMe = function(){
  if(peaceShowing){
    document.getElementById('about-me').innerHTML = "<h1>About Me<\/h1>";
    peaceShowing=false;
  }
}

showPeaceIcon = function(){
  if(!peaceShowing){
    document.getElementById('about-me').innerHTML = "<i class=\"fa fa-hand-peace-o\"><\/i>";
    peaceShowing = true;
  }
}

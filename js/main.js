$(document).ready(function(){
 

 var addContact = function(name, profile, email,phone){
    var newContact = ["<li>",
    "<img src=" + profile + ">", 
    "<div>" + name + "</div>",
    "<div>" + email + "</div>", 
    "<div>" + phone + "</div>", 
    "<span class='delete'>Delete?</span></li>"].join(' ');
    $(newContact).appendTo('ul').fadeIn(500);
  };

  $('form').submit(function(e){
     e.preventDefault();
     var name = $('#name').val();
     var profile = $('#image').val();
     var email = $('#email').val();
     var phone = $('#phone').val();
    addContact(name, profile, email, phone);
 });

  
  $('ul').on('click', 'span', function(){
    var contact = $(this)
    $(this).parent().fadeOut(1000, 
    function(){
      $(this).remove();
    });
  }); 

  });
  

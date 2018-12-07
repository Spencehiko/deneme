console.log("HEY!");

$(document).ready(function () {
  $("#msg").html("<h2>jQuery Hello World</h2>");
  $("#newdiv").on('click', function () {
  alert("Hello world!");
 });
  $('#home').on('click',()=>{
    alert('clicked');
    window.location.href = './haha.html';
  })
 
});



/*
$(document).ready(() => {
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  })
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  $('.btn').on('mouseenter', () => {
    $(event.currentTarget).addClass('btn-hover');
  })
  $('.btn').on('mouseleave', () => {
    $(event.currentTarget).removeClass('btn-hover');
  })
  $('.postText').on('keyup', () => {
    let remaining = 140;
    let post = $(event.currentTarget).val();
    remaining = remaining - post.length;
    $('.characters').html(remaining);
    if(remaining <=0){
      $('.wordcount').addClass('red');
    }
    else {
      $('.wordcount').removeClass('red');      
    }
  })
  $('.postText').focus();
}); 
*/
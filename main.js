console.log("HEY!");
var KEY = "7e8580151d73b9fa709851f6dd87ba51";
var HASH = "f5e98a717934936619c8cb55bed44157";
var LIMIT = 100;
var OFFSET = 0;
var DATA = new Array(1500);


$(document).ready(function () {
  $("#msg").html("<h2>Hello, World!</h2>");
  $('#home').on('click', () => {
    alert('clicked');
    window.location.href = './haha.html';
  });
  $.ajax({
    url: "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + KEY + "&hash=" + HASH + "&limit=" + LIMIT + "&offset=" + OFFSET,
    dataType: "json",
    limit: 100,
    apikey: "7e8580151d73b9fa709851f6dd87ba51"
  });
  $("#newdiv").on('click', function () {
    for (OFFSET = 0; OFFSET < 1491; OFFSET = OFFSET + 100) {
      $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" + KEY + "&hash=" + HASH + "&limit=" + LIMIT + "&offset=" + OFFSET, function (data) {
        for (var i = 0; i < 100; i++) {
          DATA[OFFSET + i] = data.data.results[i].name;
          console.log(DATA[OFFSET + i]);
        }
      });
      }




  });
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
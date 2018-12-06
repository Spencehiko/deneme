console.log("HEY!");
$(document).ready(function(){
    $("#msg").html("<h2>jQuery Hello World</h2>");
   });
   $(document).ready(function() {
    $("#newdiv").on('click',function() {
      alert("Hello world!");
    });
});
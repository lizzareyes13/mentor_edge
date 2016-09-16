//Problem: user when clicking in image goes to a dead end.
//Solution: create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>",'<p id="ipsum"></p>');
$overlay.css("height", $(document).height()+"px");

$overlay.append($image);

//Add overlay
  // An image
  // A caption
$("body").append($overlay);
//1. Capture the click event on a link to an image.
$('.pictureTable a').click(function (event){
  event.preventDefault();
  var href = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src", href);
  // Show the overlay.
  $overlay.show();
  // Update the overlay with the image linked in the link.
  // Get child's alt attribute and set caption.
});


//3. When overlay is clicked
  //3.1 Hide the overlay

$("#overlay").click(function (event){
  $("#overlay").hide();
})

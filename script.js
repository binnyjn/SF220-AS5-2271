$(document).ready(function() {
  $("#gallery a").click(function() {
    var galleryHref = $(this).attr('href');
    var galleryAlt = $(this).attr('title');
    $('figure').css('display','none');
    $('figure img').attr({ src: galleryHref, alt: galleryAlt });
    $('figcaption').html("<b>"+galleryAlt+"</b>");
    $('figure').fadeToggle(1500);
    return false;
  })
});
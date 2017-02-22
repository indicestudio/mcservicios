$(function() {
  
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 320); // 140px width for each client item
  $clientcarousel.css('width', clientwidth);

  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function() {
      rotating = true; // turn off rotation when hovering
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#clients');

  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({
        'margin-left': '-320px'
      }, 3500, 'linear', function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clients-list li:last').after($first);
      });
    }
  }

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});
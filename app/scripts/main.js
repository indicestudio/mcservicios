$(function() {
  //Dynamic change//
  $(function() {

    var newHash      = '',
        $mainContent = $('#main-content'),
        $pageWrap    = $('#page-wrap'),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $('nav').delegate('a', 'click', function() {
        window.location.hash = $(this).attr('href');
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find('#guts')
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + ' #guts', function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + 'px'
                            });
                        });
                        $('nav a').removeClass('current');
                        $('nav a[href='+ newHash +']').addClass('current');
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});


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
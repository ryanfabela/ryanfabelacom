//slidebar logic/toggle
    var controller = new slidebars();
    controller.init();

    // Toggle Slidebars
    $( '.toggle-id-1' ).on( 'click', function ( event ) {
      // Stop default action and bubbling
      event.stopPropagation();
      event.preventDefault();

      // Toggle the Slidebar with id 'id-1'
      controller.toggle( 'id-1' );
    } );
      $('.sidebarbuttontoggle').on('click', function (event) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();

        // Toggle the Slidebar with id 'id-1'
        controller.toggle('id-1');
      });

//button visibility
    var button = document.getElementById("sidebarbutton");

    function showMore() {
         button.style.visibility="visible";
    }

    function showLess() {
        button.style.visibility="hidden";
    }
//main slidebars function
$(function() {
      //Keep track of how many swipes
      var count=0;
            var controller = new slidebars();
            controller.init();
      //Enable swiping...
      $("#maindiv").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
                // Stop default action and bubbling
                event.stopPropagation();
                event.preventDefault();
                
                // Toggle the Slidebar with id 'id-1'
                controller.toggle( 'id-1' );
                showLess();
        },
        
      });
            $("#bookdiv").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function(event, direction, distance, duration, fingerCount) {
                // Stop default action and bubbling
                event.stopPropagation();
                event.preventDefault();
                
                // Toggle the Slidebar with id 'id-1'
                controller.toggle( 'id-1' );
                showMore();
        },
      });
    });
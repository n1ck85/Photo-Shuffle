;(function( $, window ) {
    
_defaults = {
    x : 3, // tiles in x axis
    y : 3, // tiles in y axis
    gap: 2  
  };

  $.fn.splitInTiles = function( options ) {

    var o = $.extend( {}, _defaults, options );

    return this.each(function() { 

      var $container = $(this),
          width = $container.width(),
          height = $container.height(),
          $img = $container.find('img'),
          n_tiles = o.x * o.y,
          wraps = [], $wraps;                      
      
////Custom code to crop image to fit     
////console.log('width before'+puzzle.currentImg.width);
////    var img = $('#currentImg');
//    var h = $img.height();console.log('image height:'+h);    
//    var w = $img.width(); console.log('image width:'+w);
//    var offset = 0;
//        if( w > h ){
//          var width = (w - h) / w; console.log('width > height and offset = w:'+w+' - h:'+h+' total='+width);
//              offset = Math.round(width * 100);
//              puzzle.currentImg.width = ( width / 100 ) * offset;   console.log('width percentage = '+puzzle.currentImg.width);                
//        }else if( h > w ){
//              offset = (h - w) / 2; console.log('height > width and offset = '+offset);
//              puzzle.currentImg.height = h + offset;  console.log('height = '+puzzle.currentImg.height); 
//        };
//        console.log('offset left'+ $('img'.tile).css('background-position'));
////console.log('width after'+puzzle.currentImg.width);            
// //end of custom code
 
      for ( var i = 0; i < n_tiles; i++ ) {        
        wraps.push('<div id="parent'+i+'" class="parent droppable"><div id="tile'+i+'" class="tile draggable"></div></div>');
      }

      $wraps = $( wraps.join('') );

      // Hide original image and insert tiles in DOM
      $img.hide().after( $wraps );

      // Set Tile attributes
      $('.tile').css({
        width: Math.floor((width / o.x) - o.gap),
        height: Math.floor((height / o.y) - o.gap),
        //marginBottom: o.gap +'px',
        //marginRight: o.gap +'px',
        backgroundImage: 'url('+ $img.attr('src') +')'
        //backgroundSize: width +'px '+ height +'px'//width <---now set using a stylesheet in script.js config()
      });
      //Set parent attributes
        $('.parent').css({
        width: Math.floor((width / o.x) - o.gap),
        height: Math.floor((height / o.y) - o.gap),
        marginBottom: o.gap +'px',
        marginRight: o.gap +'px'
      });
  //Makes a large background image of the puzzle
//      $('#imgBgBlur').css({
//        backgroundImage: 'url('+ $img.attr('src') +')'
//      });
      // Adjust background position
      for ( var i = 0; i < n_tiles; i++ ) {         
        var pos = $('#tile'+i).position();
            $('#tile'+i).css('backgroundPosition',-pos.left +'px '+ -pos.top +'px');
      }
    });
  };

}( jQuery, window ));
//TODO
//adjust the "en" according to user location
//flatten search


$(document).ready(function() {

  var search = $('#search');
  var content = $(".grid");
  // var grid = $(".grid");
  // var gridItem = $(".grid-item");

  $('#search-form').submit(function() {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: 260,
      gutter: 20
    });

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?",
      data: {
        action: 'query',
        list: 'search',
        srsearch: search.val(),
        format: 'json'
      }, //end of data
      dataType: 'jsonp',
      success: function(data) {
        var datatp = '';
        data.query.search.map(function(f) {
          datatp += '<div class="grid-item">'
          datatp += '<div><a href="https://en.wikipedia.org/wiki/' + f.title + '"><h2>' + f.title + '</h2></a>';
          datatp += '<p>' + f.snippet + '</p>';
          datatp += '</div></div>'

        })
        content.html(datatp);
      }
    });
    return false;
  });

  $(function() {
    $("#search-form").click(function() {
      // e.preventDefault();
      $("#search-button").toggle("explode");
    });
  });

  $(function() {
    $("#date-form").click(function(e) {
      e.preventDefault();
      $("#cake-button").toggle("explode");
    });
  });

  
  // $('#wiki-button').on( 'click', function() {
  //     url:'https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1',
  //   // create new item elements
  //   var $items = $('<div class="grid-item">...</div>');
  //   // append items to grid
  //   $grid.append( $items )
  //     // add and lay out newly appended items
  //     .masonry( 'appended', $items );
  // });
  //
  // var appendButton = document.querySelector('.append-button');
  // appendButton.addEventListener( 'click', function() {
  //   // create new item elements
  //   var elems = [];
  //   var fragment = document.createDocumentFragment();
  //   for ( var i = 0; i < 3; i++ ) {
  //     var elem = getItemElement();
  //     fragment.appendChild( elem );
  //     elems.push( elem );
  //   }
  //   // append elements to container
  //   grid.appendChild( fragment );
  //   // add and lay out newly appended elements
  //   msnry.appended( elems );
  // });
  //
  // // create <div class="grid-item"></div>
  // function getItemElement() {
  //   var elem = document.createElement('div');
  //   var wRand = Math.random();
  //   var hRand = Math.random();
  //   var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
  //   var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
  //   elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
  //   return elem;
  // }





});

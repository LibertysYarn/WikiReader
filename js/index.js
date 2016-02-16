//TODO
//adjust the "en" according to user location
//


$(document).ready(function() {

  var search = $('#search');
  var searchF = $('#search-form');
  var content = $(".grid");

  $('#search-form').submit(function(s) {
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
      },
      dataType: 'jsonp',
      success: function(data) {
        var dataS = '';
        data.query.search.map(function(f) {
          dataS += '<div class="grid-item">'
          dataS += '<a target="_blank" href="https://en.wikipedia.org/wiki/' + f.title + '"><h2>' + f.title + '</h2></a>';
          dataS += '<p>' + f.snippet + '</p>';
          dataS += '</div>'

        })
        content.html(dataS);
        search.val("");
      }
    });
     s.preventDefault();
  });


  $('button').on('click', function(w) {
    var $grid = $('.grid').masonry({
      columnWidth: 260,
      itemSelector: '.grid-item'
    });
    var elems = [getItemElement()];
    var $elems = $(elems);
    $grid.append($elems).masonry('appended', $elems);

    function getItemElement() {
      var elem = document.createElement('div');
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?',
        data: {
          action: 'query',
          list: 'random',
          rnnamespace: 0,
          rnlimit: 4,
          format: 'json'
        },
        dataType: 'jsonp',
        success: function(data) {
          var dataW = '';
          data.query.random.map(function(f) {
            dataW += '<div class="grid-item">'
            dataW += '<div><a target="_blank" href="https://en.wikipedia.org/wiki/' + f.title + '"><h2>' + f.title + '</h2></a>';
            dataW += '</div></div>'
          })
          content.html(dataW)
        }
      });
      w.preventDefault();
    };
  });

});

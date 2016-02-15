//TODO
//adjust the "en" according to user location
//


$(document).ready(function() {

  var search = $('#search');
  var content = $(".grid")

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
      },
      dataType: 'jsonp',
      success: function(data) {
        var datatp = '';
        data.query.search.map(function(f) {
          datatp += '<div class="grid-item">'
          datatp += '<a href="https://en.wikipedia.org/wiki/' + f.title + '"><h2>' + f.title + '</h2></a>';
          datatp += '<p>' + f.snippet + '</p>';
          datatp += '</div>'

        })
        content.html(datatp);
      }
    });
    return false;
  });


  $('#wiki-button').on('click', function() {
    var $grid = $('.grid').masonry({
      columnWidth: 260,
      itemSelector: '.grid-item'
    });
    var elems = [getItemElement(), getItemElement(), getItemElement()];
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
          var datatp = '';
          data.query.random.map(function(f) {
            datatp += '<div class="grid-item">'
            datatp += '<div><a href="https://en.wikipedia.org/wiki/' + f.title + '"><h2>' + f.title + '</h2></a>';
            datatp += '</div></div>'
          })
          content.html(datatp)
        }
      });
      return false;
    };
  });

});

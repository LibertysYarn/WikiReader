$(document).ready(function() {

  var search = $('#search');
  var searchF = $('#search-form');
  var content = $(".grid");

  function mBlock() {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: 260,
      gutter: 20
    });
  }

  $('#search-form').submit(function(s) {
    mBlock();

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
          format: 'json',
          prop: 'info|extracts',
          generator: 'random',
          formatversion: 2,
          inprop: 'url',
          exchars: 100,
          explaintext: 1,
          grnnamespace: 0,
          grnlimit: 4
            // used a generator to get the title, full url, and text extract //
        },
        dataType: 'jsonp',
        success: function(data) {

          var dataW = '';
          data.query.pages.map(function(f) {
            var snip = (f.extract !== undefined) ? f.extract : "";
            dataW += '<div class="grid-item">'
            dataW += '<div><a target="_blank" href="https://en.wikipedia.org/wiki/' + f.fullurl + '"><h2>' + f.title + '</h2></a>';
            dataW += '<p>' + snip + '</p>';
            dataW += '</div></div>'
          })
          content.html(dataW)
        }
      });
      w.preventDefault();
    };
  });

});

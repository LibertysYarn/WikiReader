//TODO
//adjust the "en" according to user location
//flatten search


$(document).ready(function() {

  $(function() {
    $("#search-form").click(function(e) {
      e.preventDefault();
      $("#search-button").toggle("explode");
    });
  })

});

// Using XMLHttpRequest
// xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
// var ApiUserAgent = WikiReader / 1.1(https: //example.org/MyCoolTool/; MyCoolTool@example.org) BasedOnSuperLib/1.4


    // var mw;
    // (function(mw) {

      /**
       * Query a MediaWiki api.php instance with the given options
       */
      // function mwQuery(endpoint, options) {

        /**
         * Create a uniquely-named callback that will process the JSONP results
         */
        // var createCallback = function(k) {
        //   var i = 1;
        //   var callbackName;
        //   do {
        //     callbackName = 'callback' + i;
        //     i = i + 1;
        //   } while (window[callbackName])
        //   window[callbackName] = k;
        //   return callbackName;
        // }

        /**
         * Flatten an object into a URL query string.
         * For example: { foo: 'bar', baz: 42 } becomes 'foo=bar&baz=42'
         */
        // var queryStr = function(options) {
        //   var query = [];
        //   for (var i in options) {
        //     if (options.hasOwnProperty(i)) {
        //       query.push(encodeURIComponent(i) + '=' + encodeURIComponent(options[i]));
        //     }
        //   }
        //   return query.join('&');
        // }
        //
        /**
         * Build a function that can be applied to a callback.  The callback processes
         * the JSON results of the API call.
         */
    //     return function(k) {
    //       options.format = 'json';
    //       options.callback = createCallback(k);
    //       var script = document.createElement('script');
    //       script.src = endpoint + '?' + queryStr(options);
    //       var head = document.getElementsByTagName('head')[0];
    //       head.appendChild(script);
    //     };
    //
    //   }
    //
    //   mw.api = {
    //     query: mwQuery,
    //   };
    //
    // })(mw || (mw = {}));

    // $.ajax({
    //   url: '//en.wikipedia.org/w/api.php',
    //   data: {
    //     action: 'query',
    //     list: 'search',
    //     srsearch: 'Richard Feynman',
    //     format: 'json'
    //   },
    //   dataType: 'jsonp',
    //   success: function(x) {
    //     console.log('title', x.query.search[0].title);
    //   }
    // });



    //https://en.wikipedia.org/w/api.php?action=query&titles=San_Francisco&prop=images&imlimit=20&format=jsonfm

var http = require('http');

var urls = process.argv.slice(2);
var results = [];
var streamsFinished = 0;

urls.forEach(function(url, i) {
  var processCall = function(response) {
    var fullData = "";
    response.setEncoding('utf8');
    response.on("data", function(data) { fullData += data });
    response.on("end", function() {
      results[i] = fullData;
      streamsFinished++;

      if(streamsFinished === urls.length) {
        printResults();
      }
    });
  }

  http.get.apply(this, [urls[i], processCall])
})

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

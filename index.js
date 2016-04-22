var url = "https://en.wikipedia.org/w/api.php?callback=?&action=opensearch&limit=10&namespace=0&format=json&search=";

var title = "";
var extracts = "";
var search_ = "";
var wiki_search = "";
var compiled = "";

$("#input_id").bind("input", function() {
  (search_ = $(this).val())
  wiki_search = url + search_;
  // console.log(wiki_search);
  $.ajax({
    url: wiki_search,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      
      if(search_ === "" ){
        document.getElementById("Results_").innerHTML = "";     
      }
      else{compiled = "";
       for (var i = 0; i < data[1].length; i++) {
         title = data[1][i] ; 
         extract = data[2][i];
         link = data[3][i];
         compiled = compiled + "<a href='" + link + "'target='_blank'><h1>" + title + "</h1><p>" + extract + "</p></a>"
         document.getElementById("Results_").innerHTML = compiled;
       }
      }
    }

  })

})
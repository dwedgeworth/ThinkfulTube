var YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromYouTubeAPI(searchTerm, callback){
  var query = {
    'maxResults': '5',
    'part': 'snippet',
    'q': searchTerm,
    'type': 'video',
    'key':' AIzaSyAaJy_qm-qKolsvj_sAWJo0e9HGATZvds8'
  }

  $.getJSON(YOUTUBE_URL, query, callback);
}


function displayYouTubeSearch(data){
  console.log(data);
  console.log(data.items[0].snippet.thumbnails);

  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item){
     var imageUrl = item.snippet.thumbnails.medium.url;
     var imageHeight = item.snippet.thumbnails.medium.hieght;
     var imageWidth = item.snippet.thumbnails.medium.width;

     resultElement += '<p><img src=' + imageUrl + ' alt="description" height="' + imageHeight + '" width="' + imageWidth + '"></p>';
    });
  } //<img src=imageUrl alt="Smiley face" height="42" width="42">
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
  
}


function watchFormSubmit(){
  $('.js-searchform').submit(function(event){
  	event.preventDefault();
    var userQuery = $(this).find('.js-query').val();
    getDataFromYouTubeAPI(userQuery, displayYouTubeSearch);
  });
}


$(document).ready(function(){
  watchFormSubmit();
});

//API Key = 'AIzaSyAaJy_qm-qKolsvj_sAWJo0e9HGATZvds8'
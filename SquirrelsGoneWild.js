var nsfwImages = [];
var flickrLimit = 30;
function constructURL(photo){
	return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
}

var things = document.querySelectorAll(".linklisting > .thing > a.thumbnail img");
var QUERY = "bikini lingerie model";
var searchOnFlickr_ = 'https://secure.flickr.com/services/rest/?' +
      'method=flickr.photos.search&' +
      'api_key=164843a5dbdb602e0c8c13d784a56f40&' +
      'text=' + encodeURIComponent(QUERY) + '&' +
      'safe_search=1&' +
      'content_type=7&' +
      'sort=date-posted-desc&' +
      'per_page=50';

var req = new XMLHttpRequest();
req.open("GET", this.searchOnFlickr_, true);
req.onload = function(){
	if(this.status != 200){ return; }

	var photos = this.responseXML.querySelectorAll('photo');

	for (var i = 0; i < photos.length && i < things.length; i++) {
		things[i].src = constructURL(photos[i]);
	}
}
req.send(null);

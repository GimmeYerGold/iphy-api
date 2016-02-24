console.log("hello")
var apiKey = "&api_key=dc6zaTOxFJmzC"
var baseURL ="http://api.giphy.com/v1/gifs/search?q="

var inputEl = document.querySelector("input")

var search = function(event){

	var inputEl = event.target

	if(event.keyCode === 13) {
		var showMeTheGifs = inputEl.value 
		inputEl.value = ""		
	}
	var fullUrl = baseURL + showMeTheGifs + apiKey
	var pinkyPromise = $.getJSON(fullUrl)
	pinkyPromise.then(showData)
}

var showData = function(jsonData) {
	var newHTMLstring = ""
	var imgArray = jsonData.data

	var container = document.querySelector("#container")
	
	for(var i=0; i < imgArray.length; i++) {
		imgObj = imgArray[i] 
		newHTMLstring += objectToHTML(imgObj)
	}
		container.innerHTML = newHTMLstring
}

var objectToHTML = function(imgObj) {

	var theUrl = imgObj.images.original.url
	var imageHTML = '<img class="gif" src="' + theUrl + '">'
	return imageHTML
}

inputEl.addEventListener("keydown", search)

// pinkyPromise.then(showData) //setting up the showData function
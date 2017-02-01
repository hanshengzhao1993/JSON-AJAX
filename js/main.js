var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener('click', function () {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData);
  }
  ourRequest.send();  
  pageCounter++;
});

var renderHtml = function (data) {
  var htmlStirng = '';

  for(var i = 0; i<data.length; i++){
    htmlStirng += "<p>" + data[i].name + ' is a '+ data[i].species + "</p>";
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlStirng)
};
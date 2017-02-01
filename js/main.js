var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener('click', function () {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHtml(ourData);
    } else {
      console.log('errer in connection');
    }
  }
  ourRequest.send();  
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add('hide-me')
  }
});

var renderHtml = function (data) {
  var htmlStirng = '';

  for(var i = 0; i<data.length; i++){
    htmlStirng += "<p>" + data[i].name + ' is a '+ data[i].species + " likes to eat ";

    for(var ii =0; ii<data[i].foods.likes.length; ii++){
      if (ii === data[i].foods.likes.length - 1) {
        htmlStirng += data[i].foods.likes[ii];
      } else {
        htmlStirng += data[i].foods.likes[ii] + " and ";
      }
    }
    htmlStirng += ' and dislikes ';

    for(var ii =0; ii<data[i].foods.dislikes.length; ii++){
      if (ii === data[i].foods.dislikes.length - 1) {
        htmlStirng += data[i].foods.dislikes[ii];
      } else {
        htmlStirng += data[i].foods.dislikes[ii] + " and ";
      }
    }

    htmlStirng += '.</p>';
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlStirng)
};
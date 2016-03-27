 var myDataRef = new Firebase('https://j9s84fs0sfi.firebaseio-demo.com/');

$( "#submit" ).click(function() {
  var title = $('#title').val();
  var classification = $('#classification').val();
  var recipe = $('#recipe').val();
  var name = $('#name').val();
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var n = month[d.getMonth()];
  var date = month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  myDataRef.push({title:title,classification:classification,recipe:recipe,name: name,date:date});
  $('#title').val('');
  $('#classification').val('');
  $('#recipe').val('');
  $('#name').val('');
  alert("Recipe successfully added!");
});
myDataRef.on('child_added', function(snapshot) {
  var content = snapshot.val();
  displayRecipe(content.title,content.classification,content.recipe,content.name,content.date);
});
function displayRecipe(title,classification,recipe,name,date) {

  //$( "#posts" ).append("<section class="post featured wow fadeIn"><header><h2 class="title">"+title+"</h2></header><br /><div class="description"><p>"+recipe+"</p></div><footer><p class="meta">Submitted by <span class="tags">"+name+"</span> in <span class="tags">"+classification+"</span> ● <span class="tags">April 13, 2015</span></p></footer></section>");
$( "#posts" ).append('<section class="post wow fadeIn"><header><h2 class="title">'+title+'</h2></header><br /><div class="description"><p>'+recipe+'</p></div><footer><p class="meta">Submitted by <span class="tags">'+name+'</span> in <span class="tags">'+classification+'</span> ● <span class="tags">'+date+'</span></p></footer></section>');
};
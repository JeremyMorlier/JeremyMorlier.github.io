var nbBouttons = 10;
console.log(nbBouttons)
var listesBouttons = document.getElementById("listesBouttons");
console.log(listesBouttons)
for (var b=0; b<nbBouttons;b++)
{
  console.log(nbBouttons)
  var button = document.createElement("button");
  button.setAttribute("pageto", b);
  button.innerHTML="Image " + b;
  listesBouttons.appendChild(button);

  button.addEventListener("click", function(event) {
  var btn = event.target;
  var page = btn.getAttribute("pageto");
  listesBouttons.appendChild(btn);
  alert(page);
  // goto(page) -- write your function for getting the records for page[page]
  });

}


varNombreImages = 255;
varNombresMarqueur = 18;

var tableau = document.getElementById("tableauImage");

for(var k = 0; k < varNombresMarqueur; k++)
{
  console.log("marqueur" + k);
  var row = document.createElement("tr");
  row.innerHTML = "marqueur " + k;
  row.setAttribute("class", "inline-block")
  for(var i = 0; i < 64; i++)
  {
    var cell = document.createElement("td");
    var image = document.createElement("img");
    //console.log("images/marqueur" + k + "/featureMap" + i + "/image0.png")
    image.setAttribute("src","images/marqueur" + k + "/featureMap" + i + "/image0.png")
    cell.appendChild(image);
    row.appendChild(cell);
  }
  tableau.appendChild(row);
}

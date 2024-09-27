// On cree une scene 
var theScene = new Scene();
// Cree un premier acteur 
var acteur1 = new Actor(20, 40, "images/wall-32.png");
// On ajoute cet acteur dans la scene 
theScene.addActor(acteur1);
// Cree un deuxieme acteur 
var acteur2 = new Actor(60, 40, "images/wall-32.png");
// On ajoute cet acteur dans la scene 
theScene.addActor(acteur2);

for (var i = 1; i <= 10; i++) {
  theScene.addActor(new Actor(50 + i * 32, 100, "images/wall-32.png"))
}

// Création d'un timer. On appelle la 
// méthode setInterval en passant la référence 
// d'une fonction anonyme dont le code appelle 
// la méthode onTimeOut de la scène référencée 
// par la variable theScene définie plus haut. 
// La deuxième valeur 10 passée à la méthode  
// setInterval est la période de 10 ms. 
setInterval(function() {
  theScene.onTimeOut();
}, 10);

var acteur3 = new Actor(50 + i * 32, 100, "images/water-32.png")

// redéfinition de la méthode onTimeOut 

// spécifiquement pour cet acteur 

acteur3.onTimeOut = function(theScene) {


  if (this.image.src.indexOf("eau1") == -1)



    this.image.src = "eau1.bmp";


  else



    this.image.src = "eau2.bmp";

};


// Classe Scene 
function Scene() {
  // Ajoute l'attribut theActors dans 
  // lequel on copie la référence d'un tableau vide 
  this.theActors = new Array();
}

// Ajout de la methode addActor( anActor ) 
// au prototype de la classe Scene. 
// Cette methode ajoute dans le tableau référencé 
// par l'attribut theActors la référence 
// de l'acteur passé en argument 
Scene.prototype.addActor = function(anActor) {
  // On utilise la méthode push de la Array 
  // pour ajouter une case dans un tableau 
  this.theActors.push(anActor);
};
// Méthode onTimeOut qui propage l'événement 
// time out à tous les acteurs 
Scene.prototype.onTimeOut = function() {
  // Boucle parcourant toutes les cases du tableau  
  // theActors. La propriété length de celui-ci 
  // contient le nombre de cases. 
  // Chaque case contient la référence d'un acteur 
  // à partir de laquelle on appelle la méthode  
  // onTimeOut de l'acteur. 
  for (var i = 0; i < this.theActors.length; i++) {
    this.theActors[i].onTimeOut(this);
  }
}; 

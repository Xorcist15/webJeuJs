// Classe Actor 
function Actor(x, y, fichierImage) {
  // Ajoute les proprietes x et y que l'on initialise  
  // avec les valeurs des arguments x et y 
  this.x = x;
  this.y = y;
  // Cree un objet du DOM du type IMG et  
  // stocke sa reference dans nouvel attribut 
  // image que l'ajoute a l'objet 

  this.image = document.createElement("img");
  // Initialise les proprietes de l'objet IMG  
  this.image.src = fichierImage;
  this.image.style.position = "absolute";
  this.image.style.left = this.x + "px";
  this.image.style.top = this.y + "px";
  // Insere l'image de l'acteur dans  
  // l'arboresence du DOM pour qu'elle  
  // soit affichee par le navigateur 
  document.body.appendChild(this.image);
}

// Ajout de la methode moveTo( x, y ) au prototype 
// de lq classe Actor. 
// Cette methode permet de deplacer 
// un acteur a une nouvelle position 
// donnee par les arguments x et y au  
Actor.prototype.moveTo = function(x, y) {
  // Modifie les valeurs des proprietes x et y  
  // avec les valeurs des arguments x et y 
  this.x = x;
  this.y = y;
  // Change la position de l'image  
  this.image.style.left = this.x + "px";
  this.image.style.top = this.y + "px";
};
// Méthode onTimeOut qui est appellée 
// toutes les 10 ms par la scene  
Actor.prototype.onTimeOut = function(theScene) {
}; 

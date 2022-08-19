function Pokemon(nombre,tipo)
{
    this.nombre = nombre;
    this.tipo = tipo;
}

function Tipofuego(nombre,tipo)
{
    Pokemon.call(this,nombre,tipo);
    this.debilidades = ["agua","tierra,roca"];
    this.ataques = ["fuego","bola de fuego"];
}

function Tipoagua(nombre,tipo)
{
    Pokemon.call(this,nombre,tipo);
    this.debilidades = ["fuego","planta"];
    this.ataques = ["agua","bola de agua"];
}

function Tipoplanta(nombre,tipo)
{
    Pokemon.call(this,nombre,tipo);
    this.debilidades = ["fuego","agua"];
    this.ataques = ["planta","rayo"];
}

Tipofuego.prototype = Object.create(Pokemon.prototype);
Tipofuego.prototype.constructor = Tipofuego;

Tipoagua.prototype = Object.create(Pokemon.prototype);
Tipoagua.prototype.constructor = Tipoagua;

Tipoplanta.prototype = Object.create(Pokemon.prototype);
Tipoplanta.prototype.constructor = Tipoplanta;

const charizard = new Tipofuego("Charizard","fuego");
const blastoise = new Tipoagua("Blastoise","agua");
const venusaur = new Tipoplanta("Venusaur","planta");

console.log(charizard);
console.log(blastoise);
console.log(venusaur);


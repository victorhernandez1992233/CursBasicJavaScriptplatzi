var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
}


miAuto.marca 
// "Toyota"

var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020, 
detallesDelAuto: function () {
	console.log(`Auto ${this.modelo} ${this.año}`);
}

}
miAuto.detallesDelAuto();
//Auto Corolla 2020

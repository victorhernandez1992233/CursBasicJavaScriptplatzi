var uno ="piedra";
var dos ="papel";
var tres ="tijera";

var resultado = function(user, pc){
    if (user == pc){
        return resultado = "empate";
    }
    else if ((user == uno && pc == dos) || (user == dos && pc == tres) || (user == tres && pc == uno)){

		return resultado = "Gana PC";
    }
    else if ((pc == uno && user == dos) || (pc == dos && user == tres) || (pc == tres && user == uno)){

		return resultado = "ganaste";
    }
}

console.log(resultado(uno, dos));
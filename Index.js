let NomeDoHeroi = "Ninja Prateado "
let NivelDoHeroi = 11000

switch (true){
case (NivelDoHeroi >= 0 && NivelDoHeroi <= 1000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Ferro ")
break

case (NivelDoHeroi >= 1001 && NivelDoHeroi <= 2000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Bronze ")
break

case (NivelDoHeroi >= 2001 && NivelDoHeroi <= 5000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Prata ")
break

case (NivelDoHeroi >= 5001 && NivelDoHeroi <= 7001):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Ouro ")
break

case (NivelDoHeroi >= 7001 && NivelDoHeroi <= 8000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Platina ")
break

case (NivelDoHeroi >= 8001 && NivelDoHeroi <= 9000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Ascendente ")
break

case (NivelDoHeroi >= 9001 && NivelDoHeroi <= 10000):
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Imortal ")
break

default:
console.log("O Herói de nome " + NomeDoHeroi + "está no nível de Radiante ")

}
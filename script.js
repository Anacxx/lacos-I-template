
let num = Number(prompt("Digite um número:"))
let soma = 0
while(num !== 0){
    soma = soma + num
    console.log("Numero:",num)
    num = Number(prompt("Digite um número"))
}
console.log(soma)


let num1 = Number(prompt("Digite um número:"))
for (c= 0; c <=num1;c++){
    console.log(c)
}
c = 0
while(c<= num1){
    console.log(c)
    c++
}
lista = [3,6,1,7,8,3,4]

for(let c=0;c<=lista.length-1;c++){
    console.log(`O elemento de índice ${c} é o elemento ${lista[c]}`)
}
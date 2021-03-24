function soma (n1, n2){
    return n1 + n2;
}

function validaIdade (idade){
    var validar = true;
    if(idade >= 18){
        validar = true 

    }else{
        validar = false
    }
    return validar;
    
}

var idade = prompt ("Qual a sua idade ?");
console.log (validaIdade(idade));


//alert (soma(5, 10));






//var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


// mesma estrutura feita anteriormente, porém com o "for"
/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}


/*var count = 0; 
while (count <= 5){
    console.log(count);
    alert(count);
    count++;

}*/


/*var idade = prompt ("Qual a sua idade ?")

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/ 




//var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);



//*var nome = "Lethicia Asevedo";
//var idade = 22;
//alert(nome + "tem" + idade + "anos"); 

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva")


//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("-"));


//alert(lista[1]);

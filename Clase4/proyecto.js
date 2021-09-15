function suma(){
    let productos = 0;
    let suma = 0;
    while(productos < 5){
        let numero = parseFloat(prompt("Ingrese el precio del producto"));
        suma +=numero;
        productos++
    } 
    let totalAPagar = suma;
    console.log(totalAPagar);
}

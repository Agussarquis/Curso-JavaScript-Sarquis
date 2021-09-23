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
suma();

class producto{
    constructor(nombre, precio, talle) {
        this.nombre = nombre;
        this.precio = parseFloat(precio) ;
        this.talle = talle;
        this.vendido = false;
    }
    
    vender() {
        this.vendido = true;
    }
    
}
const producto1 = new producto("remera lisa","2000","XL");
const producto2 = new producto("buzo canguro","3500","L");
const producto3 = new producto("campera","5500","M");

producto1.vender();

if(vendido=true){
    alert("producto1 vendido")
}else {
    alert("segui comprando")
}
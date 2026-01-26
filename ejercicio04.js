console.log("%cEjercicio 04: objetos", style_console);

console.warn("1. propiedades de un objeto")

let propertyID = 1;
let propertyName = "Departamento en el centro de Ciudad de Mexico";
let propertyDescription= "Hermoso departamento de 3 recamaras , 1 baño y 1 cajon de estacionamiento ubicado en el centro de ciudad de mexcio, ubicado en tercer piso."
let propertyType = "D";

let propertyIsSaleable = false;
let propertyIsRentable = true;
propertyPrice = 7500.00;
let propertyLat = 19.4283813;
let propertyLong = -99.102017;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludServices = ["Agua", "Luz", "Gas"];
let propertyImage = null
let propertyOwnerId = 32412
let propertyStatus = "Good"

console.log(`Datos de la propiedad en Renta
    Nombre: ${propertyName}
    Descripcion : ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicacion: Latitud: ${propertyLat} Longitud: ${propertyLong}
    Servicios incluidos : ${propertyIncludServices}
    En renta: ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerId}
    Imagen:${propertyImage}


`);

console.warn("2. declaracion de el objeto property1")
property1 ={
    id: 1,
    name: "Departamento en el centro de ciudad de mexico ",
    description: "hermoso de 3 recamaras , 1 baño  y  1 cajon de estacionamiento ubicado en el centro de cdmx , ubicado en el tercer piso",
    type: "D",
    price : 7500.00,
    isRentable: true,
    isRentable: false,
    IncludServices: ["Agua", "Luz", "gas"],
    lat: 19.4283813,
    lon: -99.1020177,
    status: "good",
    token: Symbol("D-12558-CDMX-MX_S"),
    OwnerId: 32412

}
console.table(property1)
console.warn("3, lectura de propiedades de un Objeto");

console.log(`la propiedad: ${property1.name }(${property1.id}) descrita como : ${property1.description} se encuentra actualmente a la ${property1.IsSaleable? "venta ": property1.isRentable?"renta": "no disponible"} por un precio de : ${property1.price} con los servicios de : ${property1.idcludesServices}`);

//modifica
console.warn("4. Modificación de Propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name} el cual se describe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios incluidos de: ${property1.includedServices}  ${property1.isSaleable?", actualmente esta a la venta": "que por el momento no esta a la venta"}.` );       


// 5. Destructuración de Objetos (OBJECT DESTRUCTURING)
/* JavaScript es un lenguaje dinámico que permite que un objeto previamente definido pueda ser descompuesto
   en pequeñas nuevas partes (variables) para que estas puedan ser manipuladas según sea la necesidad */

const user1 = {
  userID: 32412,
  name: "John Doe",
  email: "john.doe@gmail.com",
  createdAt: new Date("2015-01-30T23:15:52"),
  lastLogin: new Date("2026-01-20T08:00:05"),
  userRole: "Vendedor",
  totalProperties: 12,
  rating: 9.4
};

const user2 = {
  userID: 48571,
  name: "Marco Ramírez",
  email: "marco@gmail.com",
  createdAt: new Date("2024-08-20T15:08:58"),
  lastLogin: new Date("2026-01-19T23:15:35"),
  userRole: "Comprador",
  rating: 8.5,
  lastOperation: "Buscando Departamento para renta"
};

const user3 = {
  userID: 60141,
  name: "Karla Gutierrez",
  email: "kalitag@gmail.com",
  createdAt: new Date("2023-09-10T18:18:58"),
  lastLogin: new Date("2026-01-06T23:35:35"),
  userRole: "Comprador",
  rating: 6.2,
  lastOperation: "Buscando Departamento para renta"
};

const user4 = {
  userID: 9554,
  name: "Esteban Flores",
  email: "e.flores@gmail.com",
  createdAt: new Date("2020-03-16T07:08:16"),
  lastLogin: new Date("2026-01-19T10:05:35"),
  userRole: "Comprador",
  rating: 9.2,
  lastOperation: "Buscando Departamento para renta"
};

console.warn("5. desestructuracion de onjetos");
const fecha_formateDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const Month = String(date.getMonth()+ 1).padStart(2, "0");
const year = date.getFullYear();

const hours = String(date.getHour()).padStart(2,"0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const secounds = String(date.getSecounds()).padStart(2,"0");

return `${day}/${Month}/${year} ${hours}: ${minutes}:${secounds}`;


}
const buyerBid = (seller, buyer, property, price_bidded) => {
    const { userID: sellerID, email: sellerEmail }= seller;
    const { userID: buyererID, email: buyerEmail }= buyer;
    const {price,id} =  property;

    const fecha_oferta = new date();

    console.log(
    `El usuario: ${buyererID} (${buyerEmail})  esta realizando una oferta al usuario : ${sellerID}( ${sellerEmail})
    por la cantidad ofertada de : ${price_bidded} por la propiedad ${id}
    precio real : ${price}
    fecha : ${FormDateMX(fecha_oferta)}`
    )
const bid_accuracy = ((price_bidded / price)* 100).toFixed(2)+ "%";

return{
     buyerID,
    sellerID,
    propertyID: id,
    propertyPrice: price,
    date_bidded: fecha_oferta,
    bid_accurate: bid_accuracy

};
};

//tste 1 : el usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`la oferta tiene exactitud del ${bid1.bid_accurate}`);
// test 2 : el usuario 3 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
// test 3 : el usuario 3 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`la oferta tiene una exactitud del ${bid3.bid_accurate}`);
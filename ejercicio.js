/*let miRefran;
miRefran = "Por muy sabio que sea no hay ninguno que todo lo sepa";
let longitudRefran = miRefran.length;
let novenaLetra = miRefran.charAt(8);
let ultimaLetra = miRefran.charAt(miRefran.length - 1);
let indicePalabra = miRefran.indexOf("que");

if(indicePalabra<0){
    indicePalabra.indexOf("en");
}

*/

//console.log(indicePalabra);

//Lista de contacto
let array = ["Juan Lopez", "Pedro oseguera"];

function AgregarContactos(nombre) {
  array.push(nombre);
}

function eliminarContactos(array) {
  array.splice(0, 1);
}

function verContactos(array) {
  console.log(array);
}

AgregarContactos("Hellen coello");
verContactos(array);
eliminarContactos(array);
verContactos(array);

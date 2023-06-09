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
//project 1

/*let array = ["Juan Lopez", "Pedro oseguera"];

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
*/

const array = [];

function AgregarContactos(nombre, id, apellidos, telefono, ciudad, direccion) {
  const persona = {
    nombre: nombre,
    id: id,
    apellidos: apellidos,
    telefono: telefono,
    ciudad: ciudad,
    direccion: direccion,
  };

  array.push(persona);
}

function eliminarContactos(array) {
  console.log("///////////contacto eliminado/////////////// \n");
  console.log("///////////Nueva Lista/////////////// \n");
  array.pop();
}

function verContactos(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      console.log(
        "" +
          array[i].nombre +
          " \n" +
          array[i].id +
          "\n" +
          array[i].apellidos +
          "\n" +
          array[i].telefono +
          "\n" +
          array[i].ciudad +
          "\n" +
          array[i].direccion +
          "\n" +
          ""
      );
    }
  } else {
    console.log(array[0]);
  }
}
AgregarContactos(
  "josue",
  "0801199615243",
  "Lopez Coello",
  "32716543",
  "Tegucigalpa",
  "res miraflores"
);

AgregarContactos(
  "Karla",
  "0801199765434",
  "sanchez hernandez",
  "32564534",
  "comayagua",
  "col las vegas"
);

verContactos(array);
eliminarContactos(array);
verContactos(array);

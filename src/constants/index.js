//creando contantes para seleccionar en el menu select
export const MARCAS=[
{id:1,nombre:'Europeo'},
{id:2,nombre:'Ameriano'},
{id:3,nombre:'Asiatico'},
]
//constante que devuelve los 20ultimos años
const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(30),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },
];

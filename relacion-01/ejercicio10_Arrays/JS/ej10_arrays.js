const nombres = [
    "Juan",
    "Ana",
    "Sara",
    "David",
    "Pablo",
    "Luz",
    "Mark",
    "Irene",
    "Nina",
    "Alba",
  ];

  function filtrarAmiges(nombres){
    let iguales = " ";
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i].length == 4){
            iguales += nombres[i] + " ";
        }
    }
    return iguales;
  }

  function comparacion(nombre){
    
  }

  let listaNombres = prompt("Indicame nombres separados por comas ','");
  let miNombre = prompt("Indica tu nombre");
  let 


  let amigosFran = filtrarAmiges(nombres);

  console.log(amigosFran);
  document.write(amigosFran);

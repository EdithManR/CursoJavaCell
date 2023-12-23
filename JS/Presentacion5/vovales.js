const contarVocales = palabra => {
  // https://parzibyte.me/blog
  const vocales = "aáeéiíoóuú";
  let cantidadVocales = 0;
  for (const letra of palabra) {
      if (vocales.includes(letra.toLowerCase())) {
          cantidadVocales++;
      }
  }
  return cantidadVocales;
};


const cadena = "Hola mundo. Estoy estudiando programación en JavaScript desde el blog de Parzibyte";
const vocales = contarVocales(cadena);
console.log("La cadena '%s' tiene %d vocales", cadena, vocales);
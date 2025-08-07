function converterCelsiusParaFahrenheit(celsius){
  let fahrenheit = (celsius * 9/5) + 32;
  return console.log(`${celsius}°C equivale à ${fahrenheit}°F`);
}

const temperaturaFahrenheit = converterCelsiusParaFahrenheit(25);

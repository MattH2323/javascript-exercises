const convertToCelsius = function(FahrenheitTemp) {
  let CelsiusTemp = (FahrenheitTemp - 32)*(5/9);
  const roundedCelsiusTemp = Math.round(CelsiusTemp*10)/10;
  return roundedCelsiusTemp;
};

const convertToFahrenheit = function(CelsiusTemp) {
  let FahrenheitTemp = (CelsiusTemp*9/5 + 32);
  const roundedFahrenheitTemp = Math.round(FahrenheitTemp*10)/10;
  return roundedFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

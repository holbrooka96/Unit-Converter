/*
1 meter = 3.2808 feet
1 liter = 0.2641720524 gallons
1 kilogram = 2.2046226218 pounds
*/

const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputText = document.getElementById("input-box")
const meterConversionNum =  3.2808
const literConversionNum =  0.2641720524
const kgConversionNum =  2.2046226218


convertBtn.addEventListener("click", convertNum)


function convertNum() {
numtoConvert = Number(inputText.value)

    length.textContent =  `${numtoConvert} meters = ${(numtoConvert*meterConversionNum).toFixed(3)} feet 
    | ${numtoConvert} feet = ${(numtoConvert/meterConversionNum).toFixed(3)} meters`
    
    volume.textContent =  `${numtoConvert} liters = ${(numtoConvert*literConversionNum).toFixed(3)} gallons 
    | ${numtoConvert} gallons = ${(numtoConvert/literConversionNum).toFixed(3)} liters`

    mass.textContent =  `${numtoConvert} kilos = ${(numtoConvert*kgConversionNum).toFixed(3)} pounds 
    | ${numtoConvert} pounds = ${(numtoConvert/kgConversionNum).toFixed(3)} kilos`

}

convertNum()
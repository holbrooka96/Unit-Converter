/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//20 meters = 65.616 feet | 20 feet = 6.096 meters
//20 liters = 5.284 gallons | 20 gallons = 75.708 liters
//20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputText = document.getElementById("input-box")
 

convertBtn.addEventListener("click", function() {
    numtoConvert = Number(inputText.value)
    length.textContent =  `${numtoConvert} meters = ${(numtoConvert*3.281).toFixed(3)} feet 
    | ${numtoConvert} feet = ${(numtoConvert/3.281).toFixed(3)} meters`
    
    volume.textContent =  `${numtoConvert} liters = ${(numtoConvert*0.264).toFixed(3)} gallons 
    | ${numtoConvert} gallons = ${(numtoConvert/0.264).toFixed(3)} liters`

    mass.textContent =  `${numtoConvert} kilos = ${(numtoConvert*2.205).toFixed(3)} pounds 
    | ${numtoConvert} pounds = ${(numtoConvert/2.205).toFixed(3)} kilos`

})



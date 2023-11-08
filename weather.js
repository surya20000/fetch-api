//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];


fetch("https://api.openweathermap.org/data/2.5/weather?q=bengaluru,in&APPID=1342f8dd595eda677ca40143519800de")
.then((data) => data.json())
.then((parsedData) => {
  console.log(parsedData)
  const nameoflocaion = parsedData.name;
  document.getElementsByClassName("place-name")[0].textContent = nameoflocaion

  const currDate = new Date(parsedData.dt * 1000);
  document.getElementsByClassName("info")[0].textContent =
  days[currDate.getDay() - 1] + ' ' + currDate.getDate() + ' ' + month[currDate.getMonth() ] + ' ' + currDate.getFullYear();
 
  

    const currTemp = Math.floor( parsedData.main.temp - 273)
    document.getElementsByClassName("temperature")[0].textContent = currTemp + '\xBA' + 'c'

    const weatherCondition = parsedData.weather[0].main
    document.getElementsByClassName("condition")[0].textContent = weatherCondition

    const expectedMaxTemp = Math.floor(parsedData.main.temp_max - 273) 
    const expectedMinTemp = Math.floor(parsedData.main.temp_min - 273)
    document.getElementsByClassName("temp-variation")[0].textContent = 
    expectedMaxTemp + '\xBA' +'/' + expectedMinTemp + '\xBA'
})
  // .then((response) => response.json())
  // .then((data) => {
  //   const currDate = new Date(data.dt * 1000);
  //   const updated = document.querySelector(".info");
  //   updated.textContent = currDate.toLocaleString();
  //   console.log(data);
  // })
  // const currTemp = new Temp(data.main);
  // const updatedTemp = document.getElementById("temperature")
  // updatedTemp.innerText = currTemp.toLocaleString();
  // console.log(data)


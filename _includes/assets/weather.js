let latitude = "-45.878761";
let longitude = "170.502792";

let url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=5eca9eed310b8daeeeb72a1a217c3161"
fetch(url, {
    method: "GET"
})
.then(response => {return response.json()})
.then(data => {
    processWeatherData(data);
})

function processWeatherData(data) {
    const article = document.querySelector('article')
    const weatherValues = (data.daily);
    const weatherEntry = document.createElement('p')
    weatherEntry.textContent ="Today's temperatures: "+noKelvin(weatherValues[0].temp.min)+" minimum, "+noKelvin(weatherValues[0].temp.max)+" maximum.";
    article.appendChild(weatherEntry)
    console.log(weatherValues);
}

function noKelvin(data) {
    return(data-273.15).toFixed(1)
}
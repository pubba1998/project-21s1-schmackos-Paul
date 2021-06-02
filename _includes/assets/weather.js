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
    const weatherDescription = document.createElement('p');
    const sunrise = document.createElement('p')
    const windEntry = document.createElement('p')
    weatherEntry.textContent ="Today's temperatures: "+noKelvin(weatherValues[0].temp.min)+" minimum, "+noKelvin(weatherValues[0].temp.max)+" maximum.";
    weatherDescription.textContent = weatherValues[0].weather[0].description
    windEntry.textContent = "Current windspeed: "+weatherValues[0].wind_speed.toFixed(1)+", wind direction: "+windDirection(weatherValues[0].wind_deg);
    var myDate = new Date(weatherValues[0].sunrise * 1000)
    myDate.setHours(myDate.getHours() +12)
    console.log(myDate.toGMTString()+"<br>"+myDate.toLocaleString())
    article.appendChild(weatherEntry)
    article.appendChild(weatherDescription)
    article.appendChild(windEntry)
    console.log(weatherValues)
}

function noKelvin(data) {
    return(data-273.15).toFixed(1)
}

function windDirection(data) {
    if(data > 337.5 || data <= 22.5) {
        return "North";
    }
    if(data > 22.5 && data <= 67.5) {
        return "North East";
    }
    if(data > 67.5 && data <= 112.5) {
        return "East"
    }
    if(data > 112.5 && data <= 157.5) {
        return "South East"
    }
    if(data > 157.5 && data <= 202.5) {
        return "South"
    }
    if(data > 202.5 && data <= 247.5) {
        return "South West"
    }
    if(data > 247.5 && data <= 292.5) {
        return "West"
    }
    if(data > 292.5 && data <= 337.5) {
        return "North West"
    }
}
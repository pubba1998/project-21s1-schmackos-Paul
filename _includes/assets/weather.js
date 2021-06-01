let latitude = "-45.878761";
let longitude = "170.502792";

let weekdays = new Array(7);      // Array associating names with days.
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

let url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=5eca9eed310b8daeeeb72a1a217c3161"
fetch(url, {
    method: "GET"
})
.then(response => {return response.json()})
.then(data => {
    console.log(data)
    processWeatherData(data);
})

function processWeatherData(data) {
    const article = document.querySelector('article')
    const weatherValues = (data.daily);
    console.log(weatherValues);
}
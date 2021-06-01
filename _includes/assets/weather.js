let latitude = "-45.878761";
let longitude = "170.502792";

let url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=5eca9eed310b8daeeeb72a1a217c3161"
fetch(url, {
    method: "GET"
})
.then(response => {return response.json()})
.then(data => {
    console.log(data)
})
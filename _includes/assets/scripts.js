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

let url = "https://api.niwa.co.nz/tides/data?lat="+latitude+"&long="+longitude;
fetch(url, {
  method: "GET",
  headers: {
    "x-apikey": "mRg3UUIvxzuyZ0ESRPttGgs5FKSyXIph"
  }
})
.then(response => { return response.json() })
.then(data => {
    console.log(data);
    processTideData(data);
})

function changeTimeZone(time){      // Function changes API output to match that of the device it is on.
  let date = new Date(time);
  // console.log(date.toLocaleString());
  return date.toLocaleString();
}

function processTideData(data){     // Extractes the tides data form the fetch quest.
  const article = document.querySelector('article');
  const tideValues = (data.values);
  console.log(data.values)

  for (let i = 0; i < tideValues.length; i++){        // for loop runs through all the data entries form the fetch and prints them out to article.
    const tideEntry = document.createElement('p');
    if(tideValues[i].value < 1){      // if statment only prints them out if the value is less that 1 (aka low tide).
      
    tideEntry.textContent = (changeTimeZone(tideValues[i].time) + " | " + (tideValues[i].value));
    }
    console.log(tideEntry);
    article.appendChild(tideEntry);
  }
}
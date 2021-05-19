---
layout: mylayout.njk
title: Ahhh
---

# {{ title }}
<script>

let latitude = "-45.878761";
let longitude = "170.502792";

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

function processTideData(data){

}
</script>
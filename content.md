---
layout: mylayout.njk
title: 
---

  <div id = "container">
      <h1 id = "myHeader">Tides for Buddy's Beach</h1> 
  </div>
    
  <article id = "tide"></article>
    
  <div id = "widget">
      <iframe id="widget-iframe" width="300px" height="167px"
      src="https://services.metservice.com/weather-widget/widget?params=white|small|portrait|days-3|classic&loc=dunedin&type=urban" 
      allowtransparency="true" style="border:none"></iframe>
  </div>

  <style>
        body {
        background-color:rgb(221, 221, 221);
        margin: 0;
      }

      #myHeader {
        text-align: center;
        font-family: 'Nanum Pen Script', cursive;
        font-size: 3em;
      }

      #tide {
        text-align: center;
        line-height: 200%;
      }

      p {
        font-family: 'Quicksand', sans-serif;
      }

      #container {
        background-color: rgb(173, 208, 238);
        padding: 1em 0 0 0;
      }

      #widget {
        position: relative;
        display: flex;
        justify-content: center;
      }
    </style>
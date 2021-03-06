(function () {
  "use strict";  
  /* load the function varilables here
   */
  
  var domContent = document.getElementById("mainContent");
  var oWeather = {"cod":"200","message":0.0251,"city":{"id":2643743,"name":"London","coord":{"lon":-0.12574,"lat":51.50853},"country":"GB","population":0,"sys":{"population":0}},"cnt":7,"list":[{"dt":1434020400,"temp":{"day":16.19,"min":13.55,"max":16.19,"night":13.55,"eve":16.19,"morn":16.19},"pressure":1022.91,"humidity":55,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":4.81,"deg":76,"clouds":0},{"dt":1434106800,"temp":{"day":19.97,"min":14.79,"max":22.72,"night":16.79,"eve":21.11,"morn":14.79},"pressure":1015.96,"humidity":86,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":5.47,"deg":104,"clouds":92,"rain":7.21},{"dt":1434196800,"temp":{"day":18.36,"min":11.77,"max":18.36,"night":11.77,"eve":13.1,"morn":16.98},"pressure":1010.68,"humidity":88,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":10.07,"deg":232,"clouds":48,"rain":0.76},{"dt":1434283200,"temp":{"day":13.93,"min":7.62,"max":13.93,"night":7.62,"eve":11.36,"morn":11.35},"pressure":1020.3,"humidity":88,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.96,"deg":91,"clouds":100,"rain":2.9},{"dt":1434369600,"temp":{"day":14.68,"min":7.74,"max":14.94,"night":9.68,"eve":14.94,"morn":7.74},"pressure":1030.33,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.54,"deg":342,"clouds":25,"rain":1.93},{"dt":1434456000,"temp":{"day":14.69,"min":10.54,"max":16.3,"night":14.33,"eve":16.3,"morn":10.54},"pressure":1025.35,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":6.55,"deg":239,"clouds":58,"rain":0.85},{"dt":1434542400,"temp":{"day":14.6,"min":9.81,"max":14.93,"night":9.81,"eve":14.93,"morn":11.28},"pressure":1029.04,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":7.55,"deg":340,"clouds":15,"rain":0.4}]};
  
  /*  Data comes from the openWeather project:  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes
      Access the cool images here:  http://openweathermap.org/img/w/10d.png 
   */
  
  var forecastWeather = document.getElementById("forecastTable");
  
  function cityHeader () {
    //draws the information about the current city at top of table
    
    var headerContent = ['Name','ID','COD', 'Message', 'Longitutde', 'Latitude', 'Country', 'Population', 'SYS POP', 'CNT'];
    var headerData = [oWeather.city.name, oWeather.city.id, oWeather.cod, oWeather.message, oWeather.city.coord.lon, oWeather.city.coord.lat, oWeather.city.country, oWeather.city.population, oWeather.city.sys.population, oWeather.cnt];
    var table = document.createElement('table'),
        header = table.createTHead(),
        row, 
        cell;
    
    table.border = 1;
    table.style.borderCollapse="collapse";
    
    // construct header
    row = header.insertRow(0);
    for (var i = 0, len = headerContent.length; i < len; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = headerContent[i];
    }
      
    row = header.insertRow(1);
    for (var i = 0, len = headerContent.length; i < len; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = headerData[i];
    }
    
    // add table element to the dom tree
    var wrapper = document.getElementById('forecastTable');
    wrapper.appendChild(table);
  }
  
  function infoHeader() {
  
    //  Draws the header for the information of each day.
    //  We need sub header so that there are catagories
    //  Temperature               Location          Meteorlogical
    //  Min Max day eve etc       
  
    var infoHeaderContent = ['Day','Day','Min','Max', 'Night', 'Evening', 'Morning', 'Pressure', 'Humidity',
    'ID', 'Icon', 'Expected Weather','Weather Description','Speed', 'Direction',
    'Clouds','Rain'];
  
    var table = document.createElement('table'),
        body = table.appendChild(document.createElement('tbody')),
        row, 
        cell;
    
    table.border = 1;
    table.style.borderCollapse="collapse";
    
    // construct header
    row = body.insertRow();
    
    for (var i = 0, len = infoHeaderContent.length; i < len; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = infoHeaderContent[i];
    }
    
    // add  day specific table element to the dom tree
    var wrapper = document.getElementById('dayTable');
    body = table.appendChild(document.createElement('tbody'));
    wrapper.appendChild(table);
    
    for (var day = 1; day < 8; day++) {
      var dayInfo = oWeather.list[(day - 1)];
      
      /*  *****  Clean this up ****  */
  
        var foreDate = dayInfo.dt * 1000;
        //Day of the Forecast
        //  var myDate = new Date(1238540400000);
        //  our date              1434020400
        var weekdays= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        var readableDate = new Date (foreDate);
        console.log("On day " + day + " the JSON date (" + foreDate + " translates as " + readableDate);
  
        var dayOfWeekNumber = readableDate.getDay();
        var dayOfWeek = weekdays[dayOfWeekNumber];
        var date = readableDate.getDate();
        var month = readableDate.getMonth();
        var year = readableDate.getFullYear();
        var dateString = dayOfWeek + "<br />("+ month + "-" + date + "-" + year + ")";
  
        //  Creating the table for the daily row data
  
          /*  Exceptions */
    
          if (dayInfo.rain == null) {
            dayInfo.rain = "0 (undefined)";
          }
          
          var weatherImageUrl = 'https://openweathermap.org/img/w/' + dayInfo.weather[0].icon + '.png'; 
          var weatherImage = '<img src = "' + weatherImageUrl + '" />';
          
        var headerData = [dateString, dayInfo.temp.day, dayInfo.temp.min, dayInfo.temp.max,
        dayInfo.temp.night, dayInfo.temp.eve, dayInfo.temp.morn, dayInfo.pressure,
        dayInfo.humidity, dayInfo.weather[0].id,weatherImage,dayInfo.weather[0].main, 
        dayInfo.weather[0].description, dayInfo.speed, dayInfo.deg, dayInfo.clouds,
        dayInfo.rain];
  
        row = body.insertRow()
        
        for (var i = 0, len = infoHeaderContent.length; i < len; i++) {
            cell = row.insertCell(i);
            cell.innerHTML = headerData[i];
        }
      }  
  }
  
  forecastWeather.innerHTML = '<h2>7-day Forecast for ' + oWeather.city.name + '</h2>';
  cityHeader(); 
  forecastWeather.innerHTML += '<br />';
  infoHeader();
}());
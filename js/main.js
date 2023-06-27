const APIkey = `b5b40b0bae7cc75a0761771ddd756bd9`;
let city = 'Kiev'; 


function fethcWeatherData(city){
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
    fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let imgID = '';
        switch(data, data.list[0].weather[0].description){
            case 'broken clouds':
                imgID = 'icon1';
            break;
            case 'overcast clouds':
                imgID = 'icon1';
            break;
            case 'clear sky':
                imgID = 'clear-sky';
            break;
            case 'light snow':
                imgID = 'snow';
            break;
            case 'light rain':
                imgID = 'drizzle';
            break;
            default : 
            imgID = 'few-clouds';
          }
      console.log(data, data.list[0].weather[0].description);
      let html = `
      <div class="header">
          <input class="input" placeholder="Искать город"  type="text">
          <button class="button__search">Искать</button>
          <h1 class="city">${data.city.name},<span class="span country"> ${data.city.country}</span></h1>
          <div class="header_item description">${data.list[0].weather[0].description}</div>
          <div class="header_item temp">
          <img style="height: 50px; width: 50px;" src="./images/${imgID}.png" alt="">
          ${(data.list[0].main.temp - 273.15).toFixed(0)}°C
          </div>
          <div class="header_item feels_like">По ощущению :<span class="span">${(data.list[0].main.feels_like - 273.15).toFixed(0)}°C</></div>
          <div class="header_item wind">Ветер <span class="span">${data.list[0].wind.speed} м/с</span></div>
          <div class="header_item">Видимость :<span class="span">${data.list[0].visibility / 1000} к.м</span></div>
          <div class="header_item humidity">Влажность : <span class="span">${data.list[0].main.humidity} %</span></div>
          
      </div>
      `;

//   switch(description){
//     case 'clear-sky':

//   }

      document.querySelector('.container').innerHTML = html;
      btnSearch = document.querySelector('.button__search');
      input = document.querySelector('.input');


        btnSearch.addEventListener('click', (e) => {
            city = input.value;
            console.log(city);
            fethcWeatherData(city);
            
        });

   
  
  });
};
fethcWeatherData(city);


const key = "a359ab229d0703eedd8fe5434f8158c9";

function cliqueiNoBotao() {

  const input = document.querySelector(".input-cidade").value;  
 
 console.log(input);
 
  /*const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperatura = data.main.temp - 273.15;
      document.getElementById("temperatura").innerText = temperatura.toFixed(2);
    
      });
 /* const cidade = document.getElementById("cidade").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperatura = data.main.temp - 273.15;
      document.getElementById("temperatura").innerText = temperatura.toFixed(2);
    
      });*/
}


https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
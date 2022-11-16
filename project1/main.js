const api = '75095c883dca15b0ab66e61a0695b4a3';


const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');



const searchb = document.getElementsByClassName('search')





window.addEventListener('load',() =>{

    let long;
    let lat;

    position = [37.0902 , 95.7129]
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
  
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api}`;
            


            fetch(base)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    const  { temp }  = data.main;
                    const place = data.name;
                    const { description , icon }  = data.weather[0];
                    const { sunrise , sunset } = data.sys;
                   


                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const fahrenheit  = (temp * 9)/5 + 32;

                const sunriseGMT  = new Date(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);



                iconImg.src = iconUrl;

                loc.innerHTML = `${place}`;
                desc.textContent = `${description}`;
                tempC.textContent = `${temp.toFixed(2)} °C`;
                tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
            });

        });
    }
});

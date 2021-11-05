const temperature = document.querySelector('.main-temperature');
const name = document.querySelector('.name');
const icon = document.querySelector('.icon');
const feelsLike = document.querySelector('.feels-like');
const maxMinTemp = document.querySelector('.max-min');
const description = document.querySelector('.description');

const body = document.querySelector('body');



window.addEventListener('load', ()=>{
    let long;
    let lat;
    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(position =>{
        lat = position.coords.latitude;
        long =position.coords.longitude;
        async function get(){

            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=d3f13980d61805f8b6d4caee09bfe1b4`);
            let data = await response.json();
            console.log(data);
            name.innerHTML = data.name;

            temperature.innerHTML ="Temperature:  "+ data.main.temp +"°C";
            feelsLike.innerHTML ="Feels Like:  "+ data.main.feels_like +"°C";
            maxMinTemp.innerHTML ="Max/Min Temperature:  "+ data.main.temp_max  +"°C / " +data.main.temp_min +"°C";
            description.innerHTML = "Description: " + data.weather[0].description;


            if(data.main.temp <=0){
                body.style.background ="rgb(55, 55, 182)";
                icon.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';

            } else if (data.main.temp >0 && data.main.temp<=20){
                body.style.background ="lightblue";
                icon.innerHTML = '<i class="fas fa-cloud"></i>';

            }else if ( data.main.temp > 20 &&data.main.temp<=30 ){
                body.style.background ="rgb(255, 198, 93)";
                icon.innerHTML = '<i class="fas fa-cloud-sun"></i>';

            }else if ( data.main.temp > 30){
                icon.innerHTML = '<i class="fas fa-sun"></i>';

                body.style.background ="rgb(192, 28, 28)";

            }

        }
        get();

        document.querySelector('.see-previsions-btn').addEventListener('click', get2)

        async function get2(){
            let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=d3f13980d61805f8b6d4caee09bfe1b4`);
            let data = await response.json();
            console.log(data);
            document.querySelector('.in-two-hours').classList.add('active');
            document.querySelector('.in-six-hours').classList.add('active');
            document.querySelector('.tommorow').classList.add('active');
            document.querySelector('.in-two-days').classList.add('active');
            document.querySelector('.in-three-days').classList.add('active');

            document.querySelector('.temp-two-hours').innerHTML ="Temperature:  "+ data.hourly[1].temp +"°C";
            
            document.querySelector('.feels-like-two-hours').innerHTML ="Feels Like:  "+ data.hourly[1].feels_like +"°C";
            
            document.querySelector('.clouds-two-hours').innerHTML ="Clouds:  "+ data.hourly[1].clouds;

            document.querySelector('.visibility-two-hours').innerHTML ="Visibility:  "+ data.hourly[1].visibility;
            document.querySelector('.description-two-hours').innerHTML = "Description: " + data.hourly[1].weather[0].main;


            document.querySelector('.temp-six-hours').innerHTML ="Temperature:  "+ data.hourly[5].temp +"°C";
            
            document.querySelector('.feels-like-six-hours').innerHTML ="Feels Like:  "+ data.hourly[5].feels_like +"°C";
            
            document.querySelector('.clouds-six-hours').innerHTML ="Clouds:  "+ data.hourly[5].clouds;

            document.querySelector('.visibility-six-hours').innerHTML ="Visibility:  "+ data.hourly[5].visibility;
            document.querySelector('.description-six-hours').innerHTML = "Description: " + data.hourly[5].weather[0].main;



            document.querySelector('.morn').innerHTML ="Morning Temperature:  "+ data.daily[1].temp.morn +"°C";
            
            document.querySelector('.day').innerHTML ="Day Temperature:  "+ data.daily[1].temp.day +"°C";
            
            document.querySelector('.eve').innerHTML ="Evening Temperature:  "+ data.daily[1].temp.eve+"°C";

            document.querySelector('.night').innerHTML ="Night Temperature:  "+ data.daily[1].temp.night+"°C";
            document.querySelector('.min-max-temp-tommorow').innerHTML = "Min/Max Temperature: " + data.daily[1].temp.min +"°C /"+ data.daily[1].temp.max+"°C";


            document.querySelector('.morn-two').innerHTML ="Morning Temperature:  "+ data.daily[2].temp.morn +"°C";
            
            document.querySelector('.day-two').innerHTML ="Day Temperature:  "+ data.daily[2].temp.day +"°C";
            
            document.querySelector('.eve-two').innerHTML ="Evening Temperature:  "+ data.daily[2].temp.eve+"°C";

            document.querySelector('.night-two').innerHTML ="Night Temperature:  "+ data.daily[2].temp.night+"°C";
            document.querySelector('.min-max-temp-two').innerHTML = "Min/Max Temperature: " + data.daily[2].temp.min +"°C /"+ data.daily[2].temp.max+"°C";



            document.querySelector('.morn-three').innerHTML ="Morning Temperature:  "+ data.daily[3].temp.morn +"°C";
            
            document.querySelector('.day-three').innerHTML ="Day Temperature:  "+ data.daily[3].temp.day +"°C";
            
            document.querySelector('.eve-three').innerHTML ="Evening Temperature:  "+ data.daily[3].temp.eve+"°C";

            document.querySelector('.night-three').innerHTML ="Night Temperature:  "+ data.daily[3].temp.night+"°C";
            document.querySelector('.min-max-temp-three').innerHTML = "Min/Max Temperature: " + data.daily[3].temp.min +"°C /"+ data.daily[3].temp.max+"°C";




        }
        });
    } else {
        alert('no localisation');
    }

})

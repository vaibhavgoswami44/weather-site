var day = document.getElementById('day');
var date = document.getElementById('date');
var error = document.getElementById('errorShow');
var temp = document.getElementById('temp');
var temp_status = document.getElementById('temp_status');
var city_con = document.getElementById('city_con');
var hideData = document.getElementById('hideData');
var submit = document.getElementById('submit');


const d = new Date().getDay();
const m = new Date().getMonth();
const date2 = new Date().getDate();


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

day.innerHTML = `${weekday[d]}`
date.innerHTML = `${date2} ${month[m]}`


const demo = async (event) => {

    event.preventDefault();

    var cityname = document.getElementById('cityName').value;


    if (cityname === '') {

        error.innerHTML = 'Please Enter City Name'
        hideData.innerHTML = "<span style='display:none;'></span>"

    }
    else {

        try {

            var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=6d5963a55492c55f96da10962136b84c`
            var response = await fetch(url);
            var objData = await response.json()
            var data = [objData]

            temp.innerHTML = `${data[0].main.temp}&deg;C `
            city_con.innerHTML = `${data[0].name}, ${data[0].sys.country}`
            var status = data[0].weather[0].main


            if (status == "Sunny") {
                temp_status.innerHTML = " <i  class='fas fa-sun' style='color:#eccc68;' ></i>"
            }
            else if (status == "Clouds") {
                temp_status.innerHTML = " <i  class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if (status == "Rainy") {
                temp_status.innerHTML = " <i  class='fas fa-cloud-rain' style='color:#a4b0be;' ></i>"
            }
            else {
                temp_status.innerHTML = " <i  class='fas fa-sun'style='color:#44c3de;' ></i>"
            }

        }
        catch {

            error.innerHTML = 'Invalid City Name'
            hideData.innerHTML = "<span style='display:none;'></span>"

        }
    }
}


submit.addEventListener('click', demo)
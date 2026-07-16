const apiKey = "9ae94918af5158520d58f225552690f7";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){

        alert("Please enter city");

        return;
    }

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if(data.cod!="200"){

        alert("City not found");

        return;
    }

    document.getElementById("cityName").innerHTML=data.name;

    document.getElementById("temperature").innerHTML=data.main.temp;

    document.getElementById("humidity").innerHTML=data.main.humidity;

    document.getElementById("condition").innerHTML=data.weather[0].main;

    document.getElementById("wind").innerHTML=data.wind.speed;
}
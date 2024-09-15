document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function getWeather(location) {
    const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(response => {
            //if (!response.ok) {
               // throw new Error('Location not found');
           // }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    document.getElementById('weatherLocation').innerText = data.name;
    document.getElementById('weatherDescription').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('windSpeed').innerText = data.wind.speed;

    document.getElementById('weatherInfo').classList.remove('hidden');
}
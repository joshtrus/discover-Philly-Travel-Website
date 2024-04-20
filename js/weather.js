function getWeather() {
    const apiKey = 'cae1232fc0f5bd3e11f1c3c373a9cbaf';
    const location = document.getElementById('location').value;
    let apiUrl;

    // Uses the API URL based on the selected location
    if (location === 'bryn-athyn') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bryn%20Athyn,PA,US&appid=${apiKey}`;
    } else if (location === 'philadelphia') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia,PA,US&appid=${apiKey}`;
    } else if (location === 'upper-darby') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Upper%20Darby,PA,US&appid=${apiKey}`;
    } else if (location === 'king-of-prussia') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=King%20of%20Prussia,PA,US&appid=${apiKey}`;
    } else if (location === 'levittown') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Levittown,PA,US&appid=${apiKey}`;
    } else if (location === 'chester') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chester,PA,US&appid=${apiKey}`;
    } else if (location === 'bensalem') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bensalem,PA,US&appid=${apiKey}`;
    } else if (location === 'bustleton') {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bustleton,PA,US&appid=${apiKey}`;
    }

    console.log('API URL:', apiUrl); 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); 

            // All the weather information generation from the weather API
            const weatherDescription = data.weather[0].description;
            const temperatureCelsius = (data.main.temp - 273.15).toFixed(1); // Convert temperature to Celsius and round to nearest tenth
            const temperatureFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1); // Convert temperature to Fahrenheit
            const windSpeedMetersPerSec = data.wind.speed; // Wind speed in m/s
            const windSpeedMph = (windSpeedMetersPerSec * 2.237).toFixed(1); // Convert wind speed to mph
        
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    

            let weatherHtml = ''; // Initialize the HTML string for weather information

            // Create an image element dynamically
            const image = new Image();

            // Check weather conditions and display appropriate image and information
            if (weatherDescription.includes('light rain')) {
                    image.src = 'images/light_rain.png'; 
                    weatherHtml = '<p class="warning">Warning: Light Rain. Seek shelter and postpone all outdoor activities!</p>';
            } else if (weatherDescription.includes('moderate rain')) {
                image.src = 'images/moderate_rain.png'; 
                weatherHtml = '<p class="warning">Warning: Moderate Rain. Seek shelter and postpone all outdoor activities!</p>';
            } else if (weatherDescription.includes('heavy intensity rain')) {
                image.src = 'images/heavy_intensity_rain.jpg'; 
                weatherHtml = '<p class="warning">Warning: Moderate Rain. Seek shelter and postpone all outdoor activities!</p>';
            } else if (weatherDescription.includes('clear sky') || weatherDescription.includes('few clouds')) {
                image.src = 'images/clear_sky.jpg'; 
                weatherHtml += image.outerHTML; 
            } else if (weatherDescription.includes('overcast clouds')) {
                image.src = 'images/overcast_clouds.jpg'; 
                weatherHtml += image.outerHTML; 
            } else if (weatherDescription.includes('broken clouds')) {
                image.src = 'images/broken_clouds.jpg';
                weatherHtml += image.outerHTML; 
            } else if (weatherDescription.includes('scattered clouds')) {
                image.src = 'images/scattered_clouds.jpg'; 
                weatherHtml += image.outerHTML; 
            } else if (weatherDescription.includes('thunderstorm')) {
                image.src = 'images/thunderstorm.jpg'; 
                weatherHtml += image.outerHTML;
                weatherHtml = '<p class="warning">Warning: Seek shelter immediately! Postpone all plans for today</p>';
            } else {
                // TBD in the future
            }

            // Add other weather information to the weatherHtml string
            weatherHtml += `
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
                <p>Temperature: ${temperatureCelsius}°C (${temperatureFahrenheit}°F)</p>
                <p>Weather Description: ${weatherDescription}</p>
                <p>Wind Speed: ${windSpeedMph} mph</p>
            `;

            // Conditions to check whether it is safe to go outside
            if (temperatureCelsius < -10) {
                weatherHtml += '<p class="warning">Warning: Extreme cold! Stay warm indoors.</p>';
            } else if (windSpeedMph > 35) {
                weatherHtml += '<p class="warning">Warning: High wind speed! Stay inside.</p>';
            } else if (windSpeedMph > 20 && temperatureCelsius < 10) {
                weatherHtml += '<p class="warning">Warning: Do not plan to go outside!</p>';
            } else if (new Date().getHours() >= 19 || new Date().getHours() < 7) {
                weatherHtml += '<p class="night">Plan for tomorrow!</p>';
            } else {
                weatherHtml += '<p class="cleared">Have fun outside!</p>';
            }

            // Update the weather div with the weatherHtml content
            document.getElementById('weather').innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = 'Error fetching weather data';
        });
}
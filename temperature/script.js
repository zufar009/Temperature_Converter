function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('conversion-result').textContent = `${celsius}°C is equal to ${fahrenheit}°F`;

    // Change icon color based on temperature
    const temperatureIcon = document.getElementById('temperature-icon');
    const weatherIcon = document.getElementById('weather-icon');

    if (celsius >= 25) {
        temperatureIcon.className = 'fas fa-temperature-high hot-icon';
        weatherIcon.className = 'fas fa-sun hot-icon';
    } else if (celsius <= 10) {
        temperatureIcon.className = 'fas fa-temperature-low cold-icon';
        weatherIcon.className = 'fas fa-snowflake cold-icon';
    } else {
        temperatureIcon.className = 'fas fa-temperature-medium';
        weatherIcon.className = 'fas fa-snowflake cold-icon'; // Set the default icon to snowflake
    }

    // Change snowflake color based on temperature
    const snowflakeIcon = document.querySelector('.cold-icon i.fas.fa-snowflake');
    
    if (celsius <= 0) {
        snowflakeIcon.style.color = 'blue'; // Set the color to blue for very cold temperatures
    } else {
        snowflakeIcon.style.color = 'red'; // Set the color to red for cold temperatures
    }
}
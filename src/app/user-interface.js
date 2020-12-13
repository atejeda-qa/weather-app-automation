export class UserInterface {
    constructor() {
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.string = document.getElementById('weather-string')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
        this.feels_like = document.getElementById('weather-feels-like')
    }

    render(weather) {
        this.location.textContent = `${weather.name} / ${weather.sys.country}`
        this.description.textContent = `${weather.weather[0].description}`
        this.string.textContent = `${weather.main.temp} °C`
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`
        this.feels_like.textContent = `Feels like: ${weather.main.feels_like} °C`
    }
}

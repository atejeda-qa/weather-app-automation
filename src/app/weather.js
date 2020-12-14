export class Weather {
    constructor(city, country) {
        this.apiKey = process.env.API_KEY
        this.city = city
        this.country = country
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        return data
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.country = countryCode
    }
}

const { Weather } = require('./weather')
const { UserInterface } = require('./user-interface')
const { Store } = require('./store')
require('./index.css')

const user_interface = new UserInterface()
const store = new Store()

const { city, country } = store.getLocationData()
const weather = new Weather(city, country)

async function fetchWeather() {
    const DATA = await weather.getWeather()
    user_interface.render(DATA)
}

document.getElementById('weather-change-button').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    weather.changeLocation(city, country)
    store.setLocationData(city, country)
    fetchWeather()
    e.preventDefault()
})

document.addEventListener('DOMContentLoaded', fetchWeather)

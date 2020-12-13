import { Selector } from 'testcafe'

export default new class Home {
    constructor() {
        this.input = {
            city: Selector('#city'),
            countryCode: Selector('#country')
        }
        this.button = {
            find: Selector('#weather-change-button')
        }
        this.li = {
            humidity: Selector('[data-testid="humidity"]'),
            wind: Selector('[data-testid="wind"]'),
            feelsLike: Selector('[data-testid="feels-like"]')
        }
        this.title = {
            location: Selector('#weather-location'),
            description: Selector('#weather-description')
        }
    }
}
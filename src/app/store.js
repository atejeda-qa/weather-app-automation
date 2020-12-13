export class Store {
    constructor() {
        this.city
        this.country
        this.defaultCity = 'Caracas'
        this.defaultCountry = 've'
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city)
        localStorage.setItem('countryCode', countryCode)
    }

    getLocationData() {
        if (localStorage.getItem('city') === null || localStorage.getItem('countryCode') === null) {
            this.city = this.defaultCity
            this.country = this.defaultCountry
        } else {
            this.city = localStorage.getItem('city')
            this.country = localStorage.getItem('countryCode')
        }

        return {
            city: this.city,
            country: this.country
        }
    }
}
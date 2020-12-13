import Home from '../tests/pages/home'
import HomeQuestions from '../tests/questions/home-questions'
import { ClientFunction } from 'testcafe'
import CountriesCities from '../tests/helpers/enums/countries-cities-enum'

fixture`Test for weather app`
    .page`http://localhost:3000`
    .before(async () => {
        const clearLocalStorage = ClientFunction(() => {
            window.localStorage.clear()
        })
        clearLocalStorage()
    })

test('Validate app inicialized', async t => {
    await HomeQuestions.validateLocation(`${CountriesCities[1].city} / ${CountriesCities[1].countryCode}`)
})

test('Validate location and description text', async t => {
    await t
        .typeText(Home.input.city, CountriesCities[0].city)
        .typeText(Home.input.countryCode, CountriesCities[0].countryCode)
        .click(Home.button.find)
    await HomeQuestions.validateDescription(await Home.title.description.textContent)
    await HomeQuestions.validateLocation(await Home.title.location.textContent)
})
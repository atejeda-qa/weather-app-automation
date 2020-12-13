import { t } from 'testcafe'
import Home from '../pages/home'

export default new class HomeQuestions {
    async validateLocation(location) {
        const city = location.substr(0, location.indexOf(' '))
        const countryCode = location.substr(location.indexOf('/'))
        await t.expect(await Home.title.location.textContent).contains(city)
        await t.expect(await Home.title.location.textContent).contains(countryCode)
    }
    async validateDescription(description) {
        await t.expect(await Home.title.description.textContent).eql(description)
    }
}

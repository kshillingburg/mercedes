var mercedes = {}
module.exports = {
    beforeEach: browser => {
        mercedes = browser.page.mercedesObjects()
        mercedes.navigate()
            .waitForElementVisible('@loadedPage')

    },
    after: browser => {
        mercedes.end()
    },
    'Whatever Tests We Are Running': browser => {
        mercedes

    }
}
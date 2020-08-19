var pageObjectName = {}
module.exports = {
    beforeEach: browser => {
        pageObjectName = browser.page.razerObjects()
        pageObjectName.navigate()
            //.waitForElementVisible(something)

    },
    after: browser => {
        pageObjectName.end()
    },
    'Whatever Tests We Are Running': browser => {
        pageObjectName
        
    }
}
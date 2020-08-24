module.exports = {
    url: 'https://www.mbusa.com/en/vehicles/build/gle/coupe/gle53c4?category=exterior',
    elements: {
        
        nextButton: 'button[class="button button_primary button--wide button--full-width-small-only mbs-build-steps__cta"]',

        exterior: 'button[id="exterior"]',
        black: 'img[alt="Select black"]',
        polarWhite: 'img[alt="Select Polar White"]',
        obsidianBlack: 'img[alt="Select Obsidian Black metalic"]',
        iridiumSilver: 'img[alt="Select Iridium Silver metalic"]',
        mojaveSilver: 'img[alt="Select Mojave Silver metalic"]',
        lunarBlue: 'img[alt="Select Lunar Blue metalic"]',
        brilliantBlue: 'img[alt="Select Brilliant Blue metalic"]',
        emeraldGreen: 'img[alt="Select Emerald Green metalic"]',
        seleniteGrey: 'img[alt="Select Selenite Grey metalic"]',
        cardinalRed: 'img[alt="Select designo Cardinal Red metalic"]',
        diamondWhite: 'img[alt="Select designo Diamond White metalic"]',
        wheels21inch: 'img[alt="Select 21-inch AMG twin 5-spoke"]',
        wheels21inchBlack: 'img[alt="Select 21-inch AMG twin 5-spoke w/ black accents"]',
        wheels22inch: {
            selector: '(//img[@alt="Select No-Image"])[1]',
            locateStrategy: 'xpath'},
        wheels22inchBlack: {
            selector: '(//img[@alt="Select No-Image"])[2]',
            locateStrategy: 'xpath'},
        nightPackage: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[1]',
            locateStrategy: 'xpath'},
        runningBoards: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[2]',
            locateStrategy: 'xpath'},
        illuminatedStar: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[3]',
            locateStrategy: 'xpath'},
        chromeHandle: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[4]',
            locateStrategy: 'xpath'},
        

        entertainmentAndConvenience: 'button[id="entertainment"]',
        warmthAndComfort: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[1]',
            locateStrategy: 'xpath', },
        airBalance: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[2]',
            locateStrategy: 'xpath', },
        energizing: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[3]',
            locateStrategy: 'xpath', },
        ventilatedSeats: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[4]',
            locateStrategy: 'xpath', },
        massageSeats: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[5]',
            locateStrategy: 'xpath', },
        rapidHeatSeats: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[6]',
            locateStrategy: 'xpath', },
        heated2ndRow: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[7]',
            locateStrategy: 'xpath', },
        cupholders: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[8]',
            locateStrategy: 'xpath', },
        climateControl: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[9]',
            locateStrategy: 'xpath', },
        surroundSound: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[10]',
            locateStrategy: 'xpath', },
        navigation: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[11]',
            locateStrategy: 'xpath', },
        softDoors: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[12]',
            locateStrategy: 'xpath', },
        interiorAssistant: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[13]',
            locateStrategy: 'xpath', },
        heatedWindshield: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[14]',
            locateStrategy: 'xpath', },
        headUpDisplay: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[15]',
            locateStrategy: 'xpath', },
        bikeRack: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[16]',
            locateStrategy: 'xpath', },
        rearEntertainment: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[17]',
            locateStrategy: 'xpath', },
        luggageNet: {
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[18]',
            locateStrategy: 'xpath', },
    }
}
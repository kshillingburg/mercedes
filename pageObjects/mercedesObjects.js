var mercedesCommands = {
    /*Custom command that will be used to make any change
    and will accept the change when the prompt to add
    additional features that are required*/
    makeChanges: function(change) {
        var self = this
        this.click(change)
        this.pause(500)
        this.api.element("css selector",'.mbs-remediation-modal', function(visible) {
            if(visible.status ===0) {
                self.api.useXpath()
                self.click('//button[contains(text(),"Make Changes")]')
                self.api.useCss()
            }
        })
        return this
        
    }
}


module.exports = {
    url: 'https://www.mbusa.com/en/vehicles/build/gle/coupe/gle53c4?category=exterior',
    commands: [mercedesCommands],
    elements: {
        loadedPage: '#step-container',
        
        nextButton: 'button[class="button button_primary button--wide button--full-width-small-only mbs-build-steps__cta"]',

        runningTotalBuild: {
            selector://div[@class="mbs-build-pricing__price-container"]',
            locateStrategy: 'xpath'
        },

        //navigation labels
        exterior: 'button[id="exterior"]',
        interior: 'button[id="interior"]',
        entertainmentAndConvenience: 'button[id="entertainment"]',
        performanceAndSafety: 'button[id="performance"]',
        serviceAndCare: 'button[id="service"]',
        summary: 'button[id="summary"]',

        //exterior
            //color
        black: 'img[alt="Select black"]',
        polarWhite: 'img[alt="Select Polar White"]',
        obsidianBlack: 'img[alt="Select Obsidian Black metallic"]',
        iridiumSilver: 'img[alt="Select Iridium Silver metallic"]',
        mojaveSilver: 'img[alt="Select Mojave Silver metallic"]',
        lunarBlue: 'img[alt="Select Lunar Blue metallic"]',
        brilliantBlue: 'img[alt="Select Brilliant Blue metallic"]',
        emeraldGreen: 'img[alt="Select Emerald Green metallic"]',
        seleniteGrey: 'img[alt="Select Selenite Grey metallic"]',
        cardinalRed: 'img[alt="Select designo Cardinal Red metallic"]',
            //wheels
        diamondWhite: 'img[alt="Select designo Diamond White metallic"]',
        wheels21inch: 'img[alt="Select 21-inch AMG twin 5-spoke"]',
        wheels21inchBlack: 'img[alt="Select 21-inch AMG twin 5-spoke w/black accents"]',
        wheels22inch: {
            selector: '(//img[@alt="Select No-Image"])[1]',
            locateStrategy: 'xpath'},
        wheels22inchBlack: {
            selector: '(//img[@alt="Select No-Image"])[2]',
            locateStrategy: 'xpath'},
            //options
                //check boxes 1-4

        //interior
            //upholstery
        blackRedStitching: 'img[alt="Select Black MB-Tex w/Red stitching"]',
        blackNappaLeather: 'img[alt="Select Black Nappa leather"]',
        tartufoBlackNappa: { 
            selector: '(//img[@alt="Select No-Image"])[1]', 
            locateStrategy: 'xpath'},
        classicRedBlackNappa: { 
            selector: '(//img[@alt="Select No-Image"])[2]', 
            locateStrategy: 'xpath'},
        blackExclusive: { 
            selector: '(//img[@alt="Select No-Image"])[3]', 
            locateStrategy: 'xpath'},
        tartufoBlackExclusive: { 
            selector: '(//img[@alt="Select No-Image"])[4]', 
            locateStrategy: 'xpath'},
        classicRedBlackExclusive: { 
            selector: '(//img[@alt="Select No-Image"])[5]', 
            locateStrategy: 'xpath'},
        blackExclusiveLeather: { 
            selector: '(//img[@alt="Select No-Image"])[6]', 
            locateStrategy: 'xpath'},

            //trim
        greyLindenWood: '[alt="Select Grey Linden wood"]',
        aluminumGrain: '[alt="Select Aluminum with longitudinal grain"]',
        greyOak: '[alt="Select Natural Grain Grey Oak wood"]',
        brownWalnut: '[alt="Select Natural Grain Brown Walnut wood"]',
        designoFlamedAsh: '[alt="Select designo Natural Grain Black Flamed Ash wood"]',
        designoBrownLinden: "[src='/content/dam/mb-nafta/us/myco/my20/swatches/trim/BYO-TRIM-THUMBNAIL-H34.jpg']",
        metalWeave: '[alt="Select Metal Weave"]',
        carbonFiber: '[alt="Select AMG Carbon Fiber"]',
            //options
                //check boxes 1-10

        //entertainment/Convenience
            //checkboxes 1-18
        //Performance/Safety
            //check boxes 1-12
        //Service/care
            //check boxes 1-9


        //Summary    
        totalBuild: '.mbs-build-summary-banner__total',
        estimateLeas: '(.mbs-build-estimate-summary__estimate)[0]',
        
        //Selectors for check boxes
        checkBox1: { //ex: amg Night package, in: heated steering wheel, ent: warmth/comfort, per: driver assistance, ser: 2 year
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[1]',
            locateStrategy: 'xpath'},
        checkBox2: { //ex: illuminated running, in: topstitched, ent: air balance, per: AMG dynamic, ser: 3 year
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[2]',
            locateStrategy: 'xpath'},
        checkBox3: { //ex: illuminated star, in: acoustic comfort, ent: energizing package, per: speed limit assist, ser: 4 year
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[3]',
            locateStrategy: 'xpath'},
        checkBox4: { //ex: chrome door handle, in: performance steering wheel, ent: ventilated front, per: trailer hitch, ser: me connect service
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[4]',
            locateStrategy: 'xpath'},
        checkBox5: { //in: replace w/black seat belt, ent: multicontour seat, per: high preformance brakes, ser: me connect assist service
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[5]',
            locateStrategy: 'xpath'},
        checkBox6: { //in: red seat belt, ent: rapid heating seats, per: exhaust system, ser: me in-car WIFI
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[6]',
            locateStrategy: 'xpath'},
        checkBox7: { //in: DINAMICA headliner, ent: heated 2nd row, per: drive unit, ser: driver's floor mats
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[7]',
            locateStrategy: 'xpath'},
        checkBox8: { //in: door pin, ent: heated cup holders, per: Track Pace, ser: rear floor mats
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[8]',
            locateStrategy: 'xpath'},
        checkBox9: { //in: LED projectors, ent: 4 zone climate, per: wheel locking bolts, ser: concertina load sill
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[9]',
            locateStrategy: 'xpath'},
        checkBox10: { //ent: Burmester 3d surround sound, per: surround view
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[10]',
            locateStrategy: 'xpath'},
        checkBox11: { //ent: augmented video, per: adapter for trailer
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[11]',
            locateStrategy: 'xpath'},
        checkBox12: { //ent: soft close doors, per: tyre pressure gauge
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[12]',
            locateStrategy: 'xpath'},
        checkBox13: { //ent: interior assitant
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[13]',
            locateStrategy: 'xpath'},
        checkBox14: { //ent: heated windshield
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[14]',
            locateStrategy: 'xpath'},
        checkBox15: { //ent: head up display
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[15]',
            locateStrategy: 'xpath'},
        checkBox16: { //ent: bicycle rack
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[16]',
            locateStrategy: 'xpath'},
        checkBox17: { //ent: rear seat entertainment
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[17]',
            locateStrategy: 'xpath'},
        checkBox18: { //ent: luggage net
            selector: '(//label[@class="form__checkbox-label form__checkbox-label--hidden"])[18]',
            locateStrategy: 'xpath'},


    }
}
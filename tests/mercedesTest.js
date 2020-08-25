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
    'Make the most expensive car': browser => {
        mercedes
            //exterior
            .makeChanges('@diamondWhite')
            .makeChanges('@wheels22inchBlack')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox2')
            .makeChanges('@checkBox4')

            //interior
        mercedes            
            .click('@interior')
            .makeChanges('@blackExclusiveLeather')
            .makeChanges('@carbonFiber')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox5')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')

            //entertainment
        mercedes
            .click('@entertainmentAndConvenience')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')
            .makeChanges('@checkBox11')
            .makeChanges('@checkBox12')
            .makeChanges('@checkBox14')
            .makeChanges('@checkBox15')
            .makeChanges('@checkBox16')
            .makeChanges('@checkBox17')
            .makeChanges('@checkBox18')

            //performance
        mercedes
            .click('@performanceAndSafety')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox2')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')
            .makeChanges('@checkBox11')
            .makeChanges('@checkBox12')

            //service
        mercedes
            .click('@serviceAndCare')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
        mercedes
            .click('@summary')
            .expect.element('@totalBuild').text.to.contain("Total Build $117,211.5")
    },
    'Quincy Dream Car': browser => {
        mercedes
            .makeChanges('@obsidianBlack')
            .makeChanges('@wheels22inchBlack')
            .makeChanges('@checkBox1')
            .click('@nextButton')
            .makeChanges('@blackNappaLeather')
            .makeChanges('@designoFlamedAsh')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox6')
            .click('@nextButton')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox14')
            .makeChanges('@checkBox15')
            .makeChanges('@checkBox17')
            .makeChanges('@checkBox18')
            .click('@nextButton')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox10')
            .makeChanges('@nextButton')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox5')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .click('@nextButton')
            .expect.element('@totalBuild').text.to.contain('Total Build $95,604')
        },
        'Bri Dream Car': browser => {
            mercedes
            .waitForElementVisible('@polarWhite')
            .makeChanges('@polarWhite')
            .makeChanges('@wheels22inchBlack')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox2')
            .makeChanges('@checkBox3')
            .click('@nextButton')
            .pause(500)
            .makeChanges('@blackNappaLeather')
            .makeChanges('@greyOak')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .click('@nextButton')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox5')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox10')
            .makeChanges('@checkBox12')
            .makeChanges('@checkBox15')
            .click('@nextButton')
            .makeChanges('@checkBox10')
            .click('@nextButton')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .click('@nextButton')
            .expect.element('@totalBuild').text.to.contain('Total Build $98,524')
       },
       'Kyle Dream Car': browser => {
            mercedes
                //exterior
                .makeChanges('@brilliantBlue')
                .makeChanges('@wheels21inchBlack')
                console.log('@runningTotalBuild')
                //interior
            mercedes
                .click('@interior')
                .makeChanges('@classicRedBlackNappa')
                .makeChanges('@aluminumGrain')
                .makeChanges('@checkBox3')
                console.log('@runningTotalBuild')
                //Entertainment
            mercedes
                .click('@entertainmentAndConvenience')
                .makeChanges('@checkBox2')
                .makeChanges('@checkBox4')
                .makeChanges('@checkBox5')
                .makeChanges('@checkBox9')
                .makeChanges('@checkBox10')
                .makeChanges('@checkBox12')
                .makeChanges('@checkBox18')
                console.log('@runningTotalBuild')
                //Performance
            mercedes
                .click('@performanceAndSafety')
                .makeChanges('@checkBox1')
                .makeChanges('@checkBox5')
                .makeChanges('@checkBox7')
                .makeChanges('@checkBox10')
                console.log('@runningTotalBuild')
                //Service
            mercedes
                .click('@serviceAndCare')
                .makeChanges('@checkBox1')
                .makeChanges('@checkBox4')
                .makeChanges('@checkBox5')
                .makeChanges('@checkBox6')
                .makeChanges('@checkBox7')
                .makeChanges('@checkBox8')
                console.log('@runningTotalBuild')
                //Summary
            mercedes
                .click('@summary')
                .expect.element('@totalBuild').text.to.contain('Total Build $96,224')

       }
    }

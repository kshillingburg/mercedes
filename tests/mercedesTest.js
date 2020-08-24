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
            .click('@interior')
            .makeChanges('@blackExclusiveLeather')
            .makeChanges('@carbonFiber')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')
            //entertainment
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
            .click('@serviceAndCare')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .click('@summary')
<<<<<<< HEAD
            .expect.element('@totalBuild').text.to.equal("Total Build $117,211.5")
=======
            .expect.element('@totalBuild').text.to.equal('Total Build $117,211.5')
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
>>>>>>> a2357300f528ca165542c2a597bbc906909ede85
    }

}
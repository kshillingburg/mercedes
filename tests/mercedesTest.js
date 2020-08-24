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
            .click('@interior')
            .makeChanges('@blackExclusiveLeather')
            .makeChanges('@carbonFiber')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox5')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')
            .click('@entertainmentAndConvenience')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox5')
            .makeChanges('@checkBox6')
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
            .click('@performanceAndSafety')
            .makeChanges('@checkBox1')
            .makeChanges('@checkBox2')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .makeChanges('@checkBox10')
            .makeChanges('@checkBox11')
            .makeChanges('@checkBox12')
            .click('@serviceAndCare')
            .makeChanges('@checkBox3')
            .makeChanges('@checkBox4')
            .makeChanges('@checkBox6')
            .makeChanges('@checkBox7')
            .makeChanges('@checkBox8')
            .makeChanges('@checkBox9')
            .click('@summary')
            .expect.element('@totalBuild').text.to.equal('Total Build $117,211.5')
    }
}
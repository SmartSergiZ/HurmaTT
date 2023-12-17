import { expect } from '@wdio/globals'
import TariffsPage from '../pageobjects/tariffs.page.js'

const testData = {
  title: 'Tariffs',
  percentage15: '-15%',
  uahCurency: '3831.7',
  employeesCurency: '157.5',
  recruterValue: '7',
  recruiterCurency: '751.5',
  requestUrl: 'https://hurma.work/en/request/'
}

describe('Hurma test task', () => {

  beforeEach(async () => {
    await TariffsPage.open();
    await browser.pause(2000);
  })

  it('Page should contain "Tariffs" title', async () => {
    await expect(TariffsPage.tariffsTitle).toHaveText(testData.title);
  })

  it('Card price should contain 15% discount mark when user click on "6 months"', async () => {
    await TariffsPage.chooseSixMonth.click();
    await expect(TariffsPage.checkPercentage).toHaveText(testData.percentage15);
  })

  it('Card price should change currency on UAH when user click UAH in currency dropdown', async () => {
    await TariffsPage.changeCurency.click();
    await TariffsPage.chooseUahCurency.click();
    await expect(TariffsPage.tariffsPrice).toHaveText(testData.uahCurency);
  })

  it('Card price should change currency value when user choose 31-50 employees', async () => {
    await TariffsPage.employeesNumber.click();
    await TariffsPage.employeesValue.click();
    await expect(TariffsPage.tariffsPrice).toHaveText(testData.employeesCurency);
  })

  it('Card price should change currency value when user choose 17 recruiters', async () => {
    await TariffsPage.recruitersValue.setValue(testData.recruterValue);
    await expect(TariffsPage.tariffsPrice).toHaveText(testData.recruiterCurency);
  })

  it('Should redirect user to request page after click on "Book a consultation"', async () => {
    await TariffsPage.clickRedirectBtn.click()
    await expect(browser).toHaveUrl(testData.requestUrl);
  })
})


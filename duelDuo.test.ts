
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    await driver.sleep(2000)
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Draw button displays choices', async () => {
    const choiceList = await driver.findElement(By.id('choices'))
    await driver.sleep(2000)
    const displayed = await choiceList.isDisplayed()
    expect(displayed).toBe(true)
})
test('Add to duo button displays player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.id('choices'))
    await driver.sleep(2000)
    await driver.findElement(By.id('bot-btn')).click()
    const duoList = await driver.findElement(By.id('player-duo'))
    await driver.sleep(2000)
    const displayed = await duoList.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})
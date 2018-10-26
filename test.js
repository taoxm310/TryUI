const puppeteer = require('puppeteer')
const p = require('path')
!(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  //加快页面速度
  page.on('request', request => {
    if (request.resourceType() === 'image') request.abort()
    else request.continue()
  })
  page.on('load', async () => {
    const errors = await page.evaluate(() => {
      return window.errors || []
    })
    if (errors === undefined) {
      console.log('没有找到要测试的用例')
    } else if (errors.length === 0) {
      console.info('没有错误')
    } else {
      console.error('有错误')
      errors.forEach(error => {
        console.log(error.message)
      })
    }
    await browser.close()
  })
  let path = p.join(__dirname, 'dist', 'index.html')
  await page.goto(`file://${path}`)
})()

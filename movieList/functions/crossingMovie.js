const { By } = require("selenium-webdriver");

const CrossingMovie = async (driver) => {
  const movie = "Future";

  await driver.findElement(By.xpath("//input")).sendKeys(movie);

  await driver.findElement(By.xpath("//button")).click();

  await driver.findElement(By.xpath("//li/span")).click();
  //const movieText = await driver.findElement(By.xpath("//li/span")).getText();

  let isStriked = await driver.findElement(
    By.xpath("//li/span[contains(@class,'checked')]")
  );
  console.log(isStriked);
  expect(isStriked).toBeTruthy;
};

module.exports = {
  CrossingMovie,
};

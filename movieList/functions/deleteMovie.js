const { By } = require("selenium-webdriver");

const deleteMovie = async (driver,moviename) => {
  const movie = "Enchanto";

  await driver.findElement(By.xpath("//input")).sendKeys(movie);

  await driver.findElement(By.xpath("//button")).click();

  await driver.findElement(By.id(`${moviename}`)).click();

  let deletedMovie = await driver.findElement(
    By.xpath("//html/body/main/ul/li/span")
  );
expect(deletedMovie).not.toBe(movie);

}

module.exports = {
  deleteMovie
};
const { Builder, Capabilities } = require("selenium-webdriver")
const { CrossingMovie } = require("../functions/crossingMovie");
const {deleteMovie}= require("../functions/deleteMovie")
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

//const { addMovie, verifyMovie } = require("../functions/movies");
beforeAll (async()=>{
    await driver.get("http://localhost:5501/movieList/index.html");
})
afterAll(async()=>{
    await driver.quit()
})

test("testing crossing of a movie", async () => {
  await CrossingMovie(driver);
  await driver.sleep(5000);
});

test("testing delete function",  async ()=>{
    await deleteMovie(driver,"Enchanto");
    await driver.sleep(5000);
})
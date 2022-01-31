const axios = require("axios").default;

axios
  .get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
  .then((res) => {
    console.log(res.data[0]["buy"]);
  })
  .catch((error) => {
    console.log(error);
  });

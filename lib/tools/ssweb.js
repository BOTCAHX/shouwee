const axios = require("axios");
async function ssweb(url) {
     let data = await axios.post("https://www.urlbox.io/api/render", {
        url
    })
  return { result: data.data.screenshotUrl };
}

module.exports = ssweb.bind();

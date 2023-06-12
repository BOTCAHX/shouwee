const fetch = require("node-fetch");
const cfg = require("../config");

async function create(url) {
  let fetched = await fetch(
    "https://9k.gg/url.php?url=" + url + "&domain=1"
  );
  let result = await fetched.json();
  console.log(result)
  return { status: fetched.status, craator: "Caliph", result: result.short };
}

module.exports = create.bind();

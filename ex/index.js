const api = require("./../index")

let String = "Miku"
let url = "https://youtu.be/xryrtlgafkw"
api.downloader.yt.mp4(url)
.then(console.log);

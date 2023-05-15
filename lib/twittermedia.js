const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function (username) {
  try {
    const url = `https://www.sotwe.com/${username}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const videos = [];
    $('video source').each((index, element) => {
      const src = $(element).attr('src');
      $('.v-card__actions').each((i, el) => {
        const stats = $(el).find('.tweet-stats');
        const like = stats.find('.far.fa-heart').next().text().trim();
        const share = stats.find('.fas.fa-retweet').next().text().trim();
        const videoSrc = src;
        videos.push({
          videoSrc,
          like,
          share,
        });
      });
    });
    return {
      status: 200,
      result: videos,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: 'Internal Server Error',
    };
  }
}.bind()

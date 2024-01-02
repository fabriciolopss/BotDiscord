const ytdl = require("ytdl-core");

const { createAudioResource, StreamType } = require("@discordjs/voice");

module.exports = async function downloadVideoFromYoutube(urlFound) {
  const streamOptions = { seek: 0, volume: 1 };
  let stream = ytdl(urlFound, {
    filter: "audioonly",
  });
  let audioResource = createAudioResource(stream, streamOptions);

  return audioResource;
};

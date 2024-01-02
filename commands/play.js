const YouTube = require("youtube-sr").default;

async function getFirstVideoURL(searchQuery) {
  const res = await YouTube.search(searchQuery, { limit: 1 });
  console.log(res[0]);
  return res[0];
}

module.exports = async function play(songQueue, interaction) {
  let voiceChannel = interaction.member.voice.channel;
  console.log(voiceChannel);
  if (voiceChannel) {
    const videoFound = await getFirstVideoURL(
      interaction.options._hoistedOptions[0].value
    );

    interaction.reply({
      content: `O vídeo ${videoFound.title} vai ser reproduzido`,
    });

    songQueue.enqueue(videoFound.url, videoFound.title);

    console.log(`Conectado com sucesso ao canal de voz: ${voiceChannel.name}`);
  } else {
    interaction.reply({
      content: "Entre em um canal de voz antes de usar o comando!",
    });
  }
};

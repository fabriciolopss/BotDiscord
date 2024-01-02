const { EmbedBuilder } = require("discord.js");

module.exports = async function queue(songQueue, interaction) {
  if (songQueue.isEmpty()) {
    interaction.reply({ content: "Não existem musicas na fila!" });
  } else {
    const arraySongs = songQueue.getFirstFive();
    console.log(arraySongs);
    const embed = new EmbedBuilder()
      .setTitle("Próximas 5 músicas na fila")
      .setDescription(arraySongs.join("\n"))
      .setColor("#3498db");

    interaction.reply({ embeds: [embed] });
  }
};

module.exports = async function skip(songQueue, interaction) {
  if (songQueue.isEmpty()) {
    interaction.reply({
      content: "Não é possivel pular uma música na lista vazia!",
    });
  } else {
    let skippedSong = songQueue.peekTitle();
    songQueue.dequeue();
    await interaction.reply({
      content: `A música: ${skippedSong} foi pulada com sucesso!`,
    });
  }
};

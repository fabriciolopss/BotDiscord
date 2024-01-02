module.exports = async function pause(player, interaction) {
  player.resume(interaction.guild.id);
  interaction.reply({ content: "A música voltou a tocar com sucesso!" });
};

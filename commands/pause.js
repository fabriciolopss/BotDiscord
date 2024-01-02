module.exports = async function pause(player, interaction) {
  player.pause(interaction.guild.id);
  interaction.reply({ content: "A música foi pausada com sucesso!" });
};

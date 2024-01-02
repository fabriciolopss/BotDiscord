const play = require("./commands/play");
const queue = require("./commands/queue");
const skip = require("./commands/skip");
const pause = require("./commands/pause");
const resume = require("./commands/resume");
require("dotenv").config();
const Queue = require("./queueConstructor");
const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

let songQueue = new Queue();
let playerStatus = "idle";
client.player = new DisTube(client, {
  leaveOnStop: false,
  plugins: [new YtDlpPlugin()],
});
const player = client.player;

player.on("finish", (queue) => {
  playerStatus = "idle";
});

async function audioPlayer(interaction) {
  return new Promise(async (resolve) => {
    playerStatus = "playing";
    player.play(interaction.member.voice.channel, songQueue.peekUrl(), {
      member: interaction.member,
      textChannel: interaction.channel,
      interaction,
    });
  });
}

client.on("ready", (c) => {
  console.log(`👍 ${c.user.tag} logado!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "play") {
    await play(songQueue, interaction);
    console.log(songQueue);
    audioPlayer(interaction);
  } else if (interaction.commandName === "queue") {
    queue(songQueue, interaction);
  } else if (interaction.commandName === "skip") {
    await skip(songQueue, interaction);
    player.stop(interaction.guild.id);
    audioPlayer(interaction);
  } else if (interaction.commandName === "pause") {
    pause(player, interaction);
  } else if (interaction.commandName === "resume") {
    resume(player, interaction);
  }
});

client.login(process.env.BOT_TOKEN);

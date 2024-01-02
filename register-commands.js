require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "play",
    description: "Adicione uma nova música na fila de músicas!",
    options: [
      {
        name: "query",
        description: "Adicione o nome ou url da música",
        required: true,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: "queue",
    description: "Veja a fila de músicas!",
  },
  {
    name: "skip",
    description: "Pule a música atual.",
  },
  {
    name: "pause",
    description: "Pause a musica atual!",
  },
  {
    name: "resume",
    description: "Continue a musica que foi pausada!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("Registrando comandos...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Comandos registrados...");
  } catch (error) {
    console.log(`That was a error ${error}`);
  }
})();

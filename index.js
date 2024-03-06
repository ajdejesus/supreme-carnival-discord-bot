import { Client, Events, GatewayIntentBits } from "discord.js";
import { COMMANDS } from "./commands/commands.js";
import { TOKEN } from "./constants.js";


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildIntegrations
    ]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    client.user.setActivity('ready to go');
    for (const key in COMMANDS) client.application.commands.create(COMMANDS[key].command);
});

client.on('interactionCreate', interaction => {
    console.log(interaction);
    if (interaction.isCommand() && interaction.commandName in COMMANDS) COMMANDS[interaction.commandName].execute(interaction);
});

client.login(TOKEN);

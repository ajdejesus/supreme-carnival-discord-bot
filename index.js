import { Client, Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import { TOKEN } from "./env.js";
import { COMMANDS } from "./commands/commands.js";


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
    for (const key in COMMANDS) {
        // console.log(COMMANDS[key])
        client.application.commands.create(COMMANDS[key].command);
    }
});

client.on('interactionCreate', interaction => {
    if (interaction.isCommand() && interaction.commandName in COMMANDS) COMMANDS[interaction.commandName].execute(interaction);
});

client.login(TOKEN);
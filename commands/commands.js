import { SlashCommandBuilder } from "discord.js";

// TODO: save commands in seperate files

export const COMMANDS = {
    'ping': {
        command: new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with pong!'),
        execute: async interaction => {
            await interaction.reply('Pong!');
        }
    },
    'repo': {
        command: new SlashCommandBuilder()
            .setName('repo')
            .setDescription('Replies with bot code repository'),
        execute: async interaction => {
            await interaction.reply('Github repository can be found at https://github.com/ajdejesus/supreme-carnival-discord-bot');
        }
    },
    'log': {
        command: new SlashCommandBuilder()
            .setName('log')
            .setDescription('Log `interaction` object in bot console'),
        execute: interaction => console.log(interaction)
    }
};
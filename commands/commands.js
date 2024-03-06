import { ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from "discord.js";
import { button } from "../utilities.js";

// TODO: save commands in seperate files

export const COMMANDS = {
    'ping': {
        command: new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with pong'),
        execute: async interaction => {
            await interaction.reply('Pong!');
        }
    },
    'repo': {
        command: new SlashCommandBuilder()
            .setName('repo')
            .setDescription('Replies with bot code repository'),
        execute: async interaction => {
            await interaction.reply('https://github.com/ajdejesus/supreme-carnival-discord-bot');
        }
    },
    'log': {
        command: new SlashCommandBuilder()
            .setName('log')
            .setDescription('Log `interaction` object in bot console'),
        execute: interaction => console.log(interaction)
    },
    'echo': {
        command: new SlashCommandBuilder()
            .setName('echo')
            .setDescription('Replies with the sent message')
            .addStringOption(option => option
                .setName('input')
                .setDescription('Message to reply back with')
                .setRequired(true)
            ),
        execute: async interaction => interaction.reply({ content: interaction.options.get('input').value })
    },
    'toasts': {
        command: new SlashCommandBuilder()
            .setName('toasts')
            .setDescription('Asks if people wants toasts'),
        execute: async interaction => {
            const components = [
                new ActionRowBuilder()
                    .addComponents(
                        button({ id: 'qpm', label: 'Q. Papa Mantequilla' }),
                        button({ id: 'm', label: 'Mantequilla' }),
                        button({ id: 's', label: 'Seca' })
                    )
            ];
            const reply = await interaction.reply({
                content: '¿quieren tostadas?',
                components
            });
            try {
                const response = await reply.awaitMessageComponent({
                    filter: i => i.user.id === interaction.user.id,
                    time: 60_000
                });
                console.log('response', response);
                response.reply({
                    content: 'Selected ' + response.component.label,
                    components: [],
                    ephemeral: true
                });
            } catch (e) {
                await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
            }
        }
    }
};
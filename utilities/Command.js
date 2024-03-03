import { SlashCommandBuilder } from "discord.js";

export class Command {
    constructor(name, description, execute) {
        this.data = new SlashCommandBuilder();
        this.data.setName(name);
        this.data.setDescription(description ?? name);
        this.execute = execute;
    }
}
import { ButtonBuilder, ButtonStyle } from "discord.js";

export function button({ id, label, style = ButtonStyle.Primary }) {
    return new ButtonBuilder()
        .setCustomId(id)
        .setLabel(label)
        .setStyle(style);
}
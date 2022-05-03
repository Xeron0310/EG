const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({
	intents: [
	  Intents.FLAGS.GUILDS,
	  Intents.FLAGS.GUILD_MESSAGES,
	  // Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	  // Intents.FLAGS.GUILD_MEMBERS
	],
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("서버")
    .setDescription("서버 정보를 봅니다!"),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`${interaction.guild.name}`)
	    // .setURL('https://discord.js.org/')
	    // .setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL()}`})
	    .setThumbnail(`${interaction.guild.iconURL()}`)
	    .addFields(
		    { name: '현재 멤버수', value: `${interaction.guild.memberCount} 명`, inline: true },
		    { name: 'Inline field title', value: `${interaction.guild.channels.size} 개`, inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .setTimestamp()
	    .setFooter({ text: 'Some footer text here' });


    await interaction.reply({ embeds: [exampleEmbed] });
	console.log( `${interaction.guild.channels.name}`)
  },
};

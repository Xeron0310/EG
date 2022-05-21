const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, Interaction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("핑")
    .setDescription("DISCORD API 지연률과 BOT의 지연률을 알려줍니다!"),
  async execute(interaction, client) {
    const exampleEmbed = new MessageEmbed()
	    .setColor('#9B17FF')
	    .setTitle(`DISCORD & BOT 지연률`)
	    .addFields(
			{ name: 'BOT 지연률', value: "지연률" + " : " + `${Date.now() - interaction.createdTimestamp}ms`, inline: false },
            { name: 'API 지연률', value: "지연률" + " : " + `${Math.round(client.ws.ping)}ms`, inline: true },
		)   
	    .setTimestamp()
	    .setFooter({ text: 'PROJECT : DREAM 제공', iconURL: 'https://i.ibb.co/BykvSR0/project-dream.jpg'});


    await interaction.reply({ embeds: [exampleEmbed] });
	console.log(`${"guildID : " + interaction.guild + "  name : " + interaction.guild.name}` + "  server ping: " + `compelet`)
  },
};	
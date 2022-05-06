const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, Interaction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("서버")
    .setDescription("서버 정보를 봅니다!"),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
	    .setColor('#9B17FF')
	    .setTitle(`${interaction.guild.name}`)
	    .setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL()}`})
	    .setThumbnail(`${interaction.guild.iconURL()}`)
		.setDescription(`${interaction.guild.name}의 정보`)
	    .addFields(
			{ name: '서버 오너', value: `오너: <@${interaction.guild.ownerId}>`, inline: true },
			//{ name: `\u200B`, value: `\u200B`},
		    { name: '현재 멤버수', value: `맴버 : ${interaction.guild.memberCount} 명`, inline: true },
		    { name: '현재 채널수', value: `채팅 : ${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size} 개 \n 통화 : ${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size} 개`, inline: true },
			//{ name: `\u200B`, value: `\u200B`},
		    { name: '사용 이모지', value: `갯수 : ${interaction.guild.emojis.cache.size} 개`, inline: true },
			{ name: '역할 갯수', value: `갯수 : ${interaction.guild.roles.cache.size} 개`, inline: true },
			//{ name: `\u200B`, value: `\u200B`},

		)
	    .setTimestamp()
	    .setFooter({ text: 'PROJECT : DREAM 제공', iconURL: 'https://i.ibb.co/BykvSR0/project-dream.jpg'});


    await interaction.reply({ embeds: [exampleEmbed] });
	console.log(`${"guildID : " + interaction.guild + "  name : " + interaction.guild.name}` + "  server slashcommand embed : " + `compelet`)
  },
};
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, Interaction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("서버")
    .setDescription("서버 정보를 봅니다!"),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`${interaction.guild.name}`)
	    .setURL('https://discord.js.org/')
	    .setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL()}`})
	    .setThumbnail(`${interaction.guild.iconURL()}`)
	    .addFields(
		    { name: '현재 멤버수', value: `${interaction.guild.memberCount} 명 \n ${interaction.guild.members.filter(member => !member.u.type === '').size}`, inline: true },
		    { name: 'Inline field title', value: `채팅 : ${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size} 개 \n 통화 : ${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size} 개`, inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .setTimestamp()
	    .setFooter({ text: 'Some footer text here' });


    await interaction.reply({ embeds: [exampleEmbed] });
	console.log(``)
  },
};

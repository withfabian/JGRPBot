// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help - Available Command List',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#00FDEE')
		.setTitle('Available Command List')
		.setURL('https://asialaneroleplayofficial.web.app')
		.setAuthor('Asia Lane', 'https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&', 'https://discord.js.org')
		.setDescription('Berikut merupakan list command yang tersedia. \n Jangan lupa gunakan prefix !.')
		.setThumbnail('https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&')
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: '!cmd', value: 'Command List', inline: true },
			{ name: '!ip', value: 'Server IP', inline: true },
			{ name: '!down', value: 'Check server down', inline: true },
			{ name: '!pemain', value: 'Jumlah player online', inline: true },
			{ name: '!details', value: 'Server details', inline: true },
			{ name: '!about', value: 'About this bot', inline: true },
			{ name: '\u200B', value: '\u200B' },
		)
		.setTimestamp()
		.setFooter('Asia Lane Development Team', 'https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&');
		message.channel.send(exampleEmbed);
	},
};
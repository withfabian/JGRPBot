// at the top of your file
const Discord = require('discord.js');
const samp = require("samp-query");
const { serverip, port } = require('../config.json');

module.exports = {
	name: 'pemain',
	description: 'Total Online Player',
	async execute(message, args) {
		var settings = {
			host: serverip,
			port: port,
		};

		samp(settings, function (error, response) {
			if (error) {
			  message.channel.send(`Server Offline try again`);
			  console.log(error);
			} else {
				const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#00FDEE')
				.setAuthor('Asia Lane', 'https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&', 'https://discord.js.org')
				.addField('Online Player:', `${response["online"]}/${response["maxplayers"]}`, true)
				.setTimestamp()
				.setFooter('Asia Lane Development Team', 'https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&');
				message.channel.send(exampleEmbed)
			}
		})
	},
};
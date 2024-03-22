// at the top of your file
const Discord = require('discord.js');
const fetch = require('node-fetch');
const samp = require("samp-query");
const { serverip, port } = require('../config.json');
function cleanURL(url) {
	return /^https?:\/\//i.test(url) ? url : `http://${url}`;
};

module.exports = {
	name: 'details',
	description: 'Server Details',
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
			  const embed = new Discord.MessageEmbed()
				.setColor("#00FDEE")
				.setThumbnail("https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&")
				.setAuthor("Server Details", "https://cdn.discordapp.com/attachments/1211308635536490538/1211308893318283304/emoji-removebg-preview.png?ex=65f6f4d1&is=65e47fd1&hm=b0eac966739195229eb1d02a8f94077f24993485a230e889f948cd3ab3c18bb9&")
				.addField("Gamemode", `${response["gamemode"]}`)
				.addField("Ip Server", `${settings.host}:${settings.port}`)
				.addField("Mapname", `${response["mapname"]}`)
				.addField("Version", `${response["rules"].version}`)
				.addField("Players", `${response["online"]}/${response["maxplayers"]}`)
				.addField("Website", `[Asia Lane Website](${cleanURL(response["rules"].weburl)})`)
				.addField("Time", `${response["rules"].worldtime}`)
				.addField("Map", `${response["rules"].mapname}`)
				.setTimestamp()
				.setFooter(`This command requested by ${message.author.username}#${message.author.discriminator}`);
			  message.channel.send(embed);
			}
		});
	}
}
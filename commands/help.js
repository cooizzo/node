const Discord = require("discord.js");
const config = require("../config.json");
const ud = require("relevant-urban");
const path = require('path');
const fs = require('fs');

exports.run = async(client, message, args, discord) => {


var commands = " ";

const directoryPath = path.join(__dirname, '');
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
		
		let commandname = file.replace(".js", "");
		
		if(commandname === "define"){
			commands = commands.concat("!", commandname, " [word to search] \n")
		} else {
			commands = commands.concat("!", commandname, "\n");
		}
		
        console.log(file.replace(".js", "")); 
    });
	let embed = new Discord.RichEmbed()
		.setTitle("Help: ")
		.setDescription("Help for the super cool bot jmloureiro")
		.addField("Commands: ", commands)
		.setColor(config.color)

		message.channel.send(embed)
		message.delete(500) // ?
});


}

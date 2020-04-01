const Discord = require("discord.js");
const config = require("../config.json");
const ud = require("relevant-urban");
exports.run = async(client, message, args, discord) => {

var voiceChannel = message.member.voiceChannel;
if (voiceChannel){
	voiceChannel.join().then(connection =>{
		const dispatcher = connection.playFile('./sounds/sangue.mp3');
	dispatcher.on("end", end => {
		voiceChannel.leave();
	});
		
	}).catch(err => console.log(err));
	
}
message.delete(500) // ?
}

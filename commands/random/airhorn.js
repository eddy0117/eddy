const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message,source)
{   
    var server = servers[message.guild.id]; 
    server.dipatcher = connection.playStream(YTDL(source, {filter:"audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
            {
                Play(connection,message);
            }
        else
        {
            connection.disconnect();
        }
        });
}
class AirhornCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'airhorn',
            group: 'random',
            memberName:'airhorn',
            description: 'nonoe'
        }

        );
    }

    async run(message, args,source){
        
        
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        server.queue.push(args);
                        var rng = Math.floor(Math.random() * 5) + 1;
                        if(rng == 1)
                        source = "https://www.youtube.com/watch?v=IpyingiCwV8"
                        if(rng == 2)
                        source = "https://www.youtube.com/watch?v=UaUa_0qPPgc"
                        if(rng == 3)
                        source = "https://www.youtube.com/watch?v=66F2-af-0dU"
                        if(rng == 4)
                        source = "https://www.youtube.com/watch?v=rFaOpHqFZxM"
                        if(rng == 5)
                        source = "https://www.youtube.com/watch?v=ywzRDTeaNQg"
                        Play(connection, message,source);
                    })
            }
            
        }
        else
        {
            message.reply("you must be in a VoiceChannel first!")
        }
            
    }
}

module.exports = AirhornCommand;
const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id]; 
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter:"audioonly"}));
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
class JoinCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'join',
            group: 'random',
            memberName:'join',
            description: 'nonoe'
        }

        );
    }

    async run(message, args){
        
        
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
                        message.reply("撥歌嗨起來");
                        server.queue.push(args);
                        Play(connection, message);
                    })
            }
            
        }
        else
        {
            message.reply("先進語音頻道好ㄇ")
        }
            
    }
}

module.exports = JoinCommand;

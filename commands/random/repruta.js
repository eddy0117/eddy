const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const discord = require('discord.js');
const fs = require("fs");
class RepUtaRollCommand extends commando.Command
{
    constructor(client) {
        super(client,{
            name: 'repruta',
            group: 'random',
            memberName:'repruta',
            description: 'roll your all reputation'
        }

        );
    }

    async run(message, args,addsub)
    {  
        //let targetUser = message.guild.members.get(args[0]);
        /*
        if(!targetUser)
        {
            message.channel.send("Error");
            return;
        } 
        */ 
        if(!reputation[message.author.id]){
            reputation[message.author.id] = {
                rep: 100,
            };
        }
        
        //var PutValue = message.author.send;
        
        var scale = Math.floor(Math.random() * 8);
        if(scale == 1)
        {
            reputation[message.author.id].rep = Math.pow(reputation[message.author.id].rep , Math.floor(Math.random() * 3) + 2);
            addsub = "你的名聲暴增到了"
        }
        else 
        {
            reputation[message.author.id].rep = 10;
            addsub = "你的名聲重設為"
        } 
        message.reply(addsub + reputation[message.author.id].rep);
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>
        {
            if(err)
            {
                console.log(err);
            }
        });
        
    }
}

module.exports = RepUtaRollCommand;

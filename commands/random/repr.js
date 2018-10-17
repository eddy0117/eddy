const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const discord = require('discord.js');
const fs = require("fs");
class RepRollCommand extends commando.Command
{
    constructor(client) {
        super(client,{
            name: 'repr',
            group: 'random',
            memberName:'repr',
            description: 'roll your reputation'
        }

        );
    }

    async run(message, args)
    {  
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser)
        {
            message.channel.send("Error");
            return;
        }  
        if(!reputation[targetUser.user.username]){
            reputation[targetUser.user.username] = {
                rep: 100,
            };
        }
        
        //var PutValue = message.author.send;
        
        var scale = Math.floor(Math.random() * 2);
        if(scale == 1)
        {
            reputation[targetUser.user.username].rep = reputation[targetUser.user.username].rep + Math.floor(Math.random() * 60) + 1;
        }
        else 
        {
            reputation[targetUser.user.username].rep = reputation[targetUser.user.username].rep + Math.floor(Math.random() * 60 * -1) - 1;
        } 
        message.reply(scale + "你現在的名聲:" + reputation[targetUser.user.username].rep);
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>
        {
            if(err)
            {
                console.log(err);
            }
        });
        
    }
}

module.exports = RepRollCommand;

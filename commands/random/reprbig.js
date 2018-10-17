const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const discord = require('discord.js');
const fs = require("fs");
class RepBigRollCommand extends commando.Command
{
    constructor(client) {
        super(client,{
            name: 'reprbig',
            group: 'random',
            memberName:'reprbig',
            description: 'roll your  big reputation'
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
        
        var scale = Math.floor(Math.random() * 4);
        if(scale == 1)
        {
            reputation[message.author.id].rep = reputation[message.author.id].rep + Math.floor(Math.random() * 200) + 1;
            addsub = "你的名聲增加到了"
        }
        else 
        {
            reputation[message.author.id].rep = reputation[message.author.id].rep + Math.floor(Math.random() * 180 * -1) - 1;
            addsub = "你的名聲減少到了"
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

module.exports = RepBigRollCommand;

const commando = require('discord.js-commando');
const Discord = require('discord.js');
const reputation = require("../../reputation.json");
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
        //let targetUser = message.guild.members.get(args[0]);
        /*
        if(!targetUser)
        {
            message.channel.send("Error");
            return;
        } 
        */ 
        
        if(!reputation[message.author.username]){
            reputation[message.author.username] = {
                rep: 100,
            };
        }
        
        //var value = args;
        if( args <= 0 || args == isNaN)
        {
            message.reply("輸入正確數值 ,please");
        }
        if( args <= reputation[message.author.username].rep && args > 0 )
        {
            
        
        
            var scale = Math.floor(Math.random() * 2);
            if(scale == 1)
            {
                reputation[message.author.username].rep = reputation[message.author.username].rep + Math.floor(Math.random() * 5 * args);
                message.reply("你的名聲增加到了" + reputation[message.author.username].rep);
                
            }
            else 
            {
                reputation[message.author.username].rep = reputation[message.author.username].rep + Math.floor(Math.random() * 5 * args * -1);
                message.reply("你的名聲減少到了" + reputation[message.author.username].rep);
                
            }
        }
        else if( args >= reputation[message.author.username].rep )
        {
            message.reply('你的名聲不夠');
        } 

        if( reputation[message.author.username].rep <= 0)
        {
            message.reply('你名聲全沒了ㄌㄐ,恢復回名聲 50');
            reputation[message.author.username].rep = 50;
        }
        
        //message.reply(addsub + reputation[message.author.username].rep);
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

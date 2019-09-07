const commando = require('discord.js-commando');

class CarCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'car',
            group: 'random',
            memberName:'car',
            description: 'hentai'
        }

        );
    }

    async run(message, args){
        
        if(args > 10)
        {
            args = 1;
            message.reply("87");
        }
        
    for(var i = 0 ; i < args ; i ++ )
            {            
        
            var roll = Math.floor(Math.random() * 280000) + 150000;
        
         
            message.reply('車車:https://nhentai.net/g/' + roll + "/");
            } ;   
    }
}

module.exports = CarCommand;

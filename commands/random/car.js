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
        
    for(var i = 0 ; i < args ; i ++ ; )
            {            
        
            var roll = Math.floor(Math.random() * 50000) + 10000;
        
         
            message.reply('車車:https://www.wnacg.com/photos-slide-aid-' + roll + ".html");
            } ;   
    }
}

module.exports = CarCommand;

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
        var roll = Math.floor(Math.random() * 50000) + 10000;
        
        
        /*
        if(roll == 1)
        Car = "https://www.wnacg.org/photos-slide-aid-39667.html"
        if(roll == 2)
        Car = "https://www.wnacg.com/photos-slide-aid-23427.html"
        if(roll == 3)
        Car = ""
        if(roll == 4)
        Car = ""
        if(roll == 5)
        Car = ""
        if(roll == 6)
        Car = ""
        */
        for(var i = 0 ; i < = args ; i + + )
            {    
            message.reply('車車:https://www.wnacg.com/photos-slide-aid-' + roll + ".html");
            }    
    }
}

module.exports = CarCommand;

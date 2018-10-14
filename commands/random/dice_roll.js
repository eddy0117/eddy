const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'roll',
            group: 'random',
            memberName:'roll',
            description: 'Rolls a die'
        }

        );
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        //message.reply('你骰到了' + roll);
        
        
        if(roll == 1)
        message.channel.sendMessage({files:["https://c.kekeke.cc/t/K9jfGPC78G.gif"]});
        if(roll == 2)
        message.channel.sendMessage({files:["https://img.kekeke.cc/t/K87BsXAyZk.jpeg"]});
        if(roll == 3)
        message.channel.sendMessage({files:["https://img.kekeke.cc/t/K9jftucpYB.jpeg"]});
        if(roll == 4)
        message.channel.sendMessage({files:["https://v.kekeke.cc/t/K9nwFATvfJ.mp4"]});
        if(roll == 5)
        message.channel.sendMessage({files:["https://pbs.twimg.com/media/DpYjVdeU0AAgGFR.jpg"]});
        if(roll == 6)
        message.channel.sendMessage({files:["https://img.kekeke.cc/t/K9jcHQ7TN2.jpeg"]});
        
    }
}

module.exports = DiceRollCommand;
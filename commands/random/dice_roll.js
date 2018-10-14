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
        
        
        switch (roll) {
            case 1:
                message.channel.sendMessage({files:["https://c.kekeke.cc/t/K9jfGPC78G.gif"]});
                break;
            case 2:
                message.channel.sendMessage({files:["https://img.kekeke.cc/t/K87BsXAyZk.jpeg"]});
                break;
            case 3:
                message.channel.sendMessage({files:["https://img.kekeke.cc/t/K9jftucpYB.jpeg"]});
                break;    
            case 4:
                message.channel.sendMessage({files:["https://v.kekeke.cc/t/K9nwFATvfJ.mp4"]});
                break;
            case 5:
                message.channel.sendMessage({files:["https://pbs.twimg.com/media/DpYjVdeU0AAgGFR.jpg"]});
                break;
            case 6:
                message.channel.sendMessage({files:["https://img.kekeke.cc/t/K9jcHQ7TN2.jpeg"]});
                break;            
            default:
                break;
        }
        
    }
}

module.exports = DiceRollCommand;

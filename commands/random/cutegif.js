const commando = require('discord.js-commando');

class CuteGifCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'cutegif',
            group: 'random',
            memberName:'cutegif',
            description: 'cute'
        }

        );
    }

    async run(message, args,source){
        var roll = Math.floor(Math.random() * 15) + 1;
       
        
        switch (roll) {
            case 1:
                source = "https://i.imgur.com/4rEIWcQ.gif"
                break;
            case 2:
                source = "https://i.imgur.com/SsX8loS.gif"
                break;
            case 3:
                source = "https://i.imgur.com/uqts5wl.gif"
                break;    
            case 4:
                source = "https://i.imgur.com/EWJoPjo.gif"
                break;
            case 5:
                source = "https://i.imgur.com/5BthjV0.gif" 
                break;
            case 6:
                source = "https://i.imgur.com/nZsoQT9.gif"
                break;  
            case 7:
                source = "https://i.imgur.com/gyq9LVn.gif"    
                break;
            case 8:
                source = "https://i.imgur.com/JLAYeZP.gif"
                break;
            case 9:
                source = "https://i.imgur.com/Qd4ZZ5h.gif"
                break;    
            case 10:
                source = "https://i.imgur.com/iRTjmsJ.gif"
                break;
            case 11:
                source = "https://i.imgur.com/ZH7tulp.gif"
                break;
            case 12:
                source = "https://i.imgur.com/URclBrx.gif"
                break; 
            case 13:
                source = "https://i.imgur.com/pdFxovq.gif"
                break;
            case 14:
                source = "https://i.imgur.com/FCi20AC.gif"
                break;
            case 15:
                source = "https://i.imgur.com/naM0zk4.gif"
                break;                                   
            default:
                break;
        }
        message.channel.sendMessage({files:[source]});
        
    }
}

module.exports = CuteGifCommand;

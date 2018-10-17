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

    async run(message, args,source){
        var roll = Math.floor(Math.random() * 35) + 1;
        //message.reply('你骰到了' + roll);
        
        switch (roll) {
            case 1:
                source = "https://i.imgur.com/R46Y7fN.jpg"
                break;
            case 2:
                source = "https://i.imgur.com/XMcY3Sq.jpg"
                break;
            case 3:
                source = "https://i.imgur.com/hybdZU7.jpg"
                break;    
            case 4:
                source = "https://i.imgur.com/PnVuHzd.jpg"
                break;
            case 5:
                source = "https://i.imgur.com/KNgCbLn.jpg"
                break;
            case 6:
                source = "https://i.imgur.com/oWe0edg.jpg"
                break;        
            case 7:
                source = "https://i.imgur.com/PP1pjJt.jpg"
                break;
            case 8:
                source = "https://i.imgur.com/4G3szGr.jpg"
                break;
            case 9:
                source = "https://i.imgur.com/gDYitqm.jpg"
                break;    
            case 10:
                source = "https://i.imgur.com/GwH5wKu.jpg"
                break;
            case 11:
                source = "https://i.imgur.com/1KhiUoy.jpg"
                break;
            case 12:
                source = "https://i.imgur.com/0p4pkaz.jpg"
                break;
            case 13:
                source = "https://i.imgur.com/JAp4qML.jpg"
                break;
            case 14:
                source = "https://i.imgur.com/jzcwD47.jpg"
                break;
            case 15:
                source = "https://i.imgur.com/elPv5oZ.jpg"
                break;    
            case 16:
                source = "https://i.imgur.com/S3xEWt0.jpg"
                break;
            case 17:
                source = "https://i.imgur.com/tROwxE8.jpg"
                break;
            case 18:
                source = "https://i.imgur.com/leDF8h5.jpg"
                break;        
            case 19:
                source = "https://i.imgur.com/bJ3wbKi.jpg"
                break;
            case 20:
                source = "https://i.imgur.com/HV0sYHx.jpg"
                break;
            case 21:
                source = "https://i.imgur.com/XRe04Cd.jpg"
                break;    
            case 22:
                source = "https://i.imgur.com/N9uGcHp.jpg"
                break;
            case 23:
                source = "https://i.imgur.com/miuKIUV.jpg"
                break;
            case 24:
                source = "https://i.imgur.com/jRF1hDP.jpg"
                break;  
            case 25:
                source = "https://i.imgur.com/hJg3ZbR.jpg"
                break;
            case 26:
                source = "https://i.imgur.com/vzXudiy.jpg"
                break;
            case 27:
                source = "https://i.imgur.com/PiYnqVq.jpg"
                break;    
            case 28:
                source = "https://i.imgur.com/vTVGeI5.jpg"
                break;
            case 29:
                source = "https://i.imgur.com/M4vB7zt.jpg"
                break;
            case 30:
                source = "https://i.imgur.com/4FDjLH9.jpg"
                break;        
            case 31:
                source = "https://i.imgur.com/dRNW1YV.jpg"
                break;
            case 32:
                source = "https://i.imgur.com/hr1Sjv1.jpg"
                break;
            case 33:
                source = "https://i.imgur.com/uhtKFci.jpg"
                break;    
            case 34:
                source = "https://i.imgur.com/Yg2BFoN.jpg"
                break;
            case 35:
                source = "https://i.imgur.com/d97YcX3.jpg"
                break;
            case 36:
                source = "https://i.imgur.com/vDF30aT.jpg"
                break;
            case 37:
                source = ""
                break;
            case 38:
                source = ""
                break;
            case 39:
                source = ""
                break;    
            case 40:
                source = ""
                break;
            case 41:
                source = ""
                break;
            case 42:
                source = ""
                break;        
            case 43:
                source = ""
                break;
            case 44:
                source = ""
                break;
            case 45:
                source = ""
                break;    
            case 46:
                source = ""
                break;
            case 47:
                source = ""
                break;
            case 48:
                source = ""
                break;                              
                        
            default:
                break;
        }

        message.channel.sendMessage({files:[source]});
        /*
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
        */
    }
}

module.exports = DiceRollCommand;

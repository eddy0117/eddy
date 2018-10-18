const commando = require('discord.js-commando');

class DiceRoll5Command extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'roll5',
            group: 'random',
            memberName:'roll5',
            description: 'Rolls 5 Picture(oil)'
        }

        );
    }

    async run(message, args,source){
    
    for(var i = 0; i <= 4 ; i ++ )
    {    
        var roll = Math.floor(Math.random() * 99) + 1;
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
                source = "https://i.imgur.com/2WcPBtK.jpg"
                break;
            case 38:
                source = "https://i.imgur.com/m8oIEeX.jpg"
                break;
            case 39:
                source = "https://i.imgur.com/YoSY2Ox.jpg"
                break;    
            case 40:
                source = "https://i.imgur.com/cxu9Zbo.jpg"
                break;
            case 41:
                source = "https://i.imgur.com/kZ7CfSh.jpg"
                break;
            case 42:
                source = "https://i.imgur.com/SHN7u8o.jpg"
                break;        
            case 43:
                source = "https://i.imgur.com/CKmjLLy.jpg"
                break;
            case 44:
                source = "https://i.imgur.com/OOTFbRe.jpg"
                break;
            case 45:
                source = "https://i.imgur.com/vz6aEf4.jpg"
                break;    
            case 46:
                source = "https://i.imgur.com/xxcxeg1.jpg"
                break;
            case 47:
                source = "https://i.imgur.com/8rLtSwp.jpg"
                break;
            case 48:
                source = "https://i.imgur.com/FGS1fJ2.jpg"
                break;                              
            case 49:
                source = "https://i.imgur.com/or0V8qf.jpg"
                break;
            case 50:
                source = "https://i.imgur.com/7lgl8qO.jpg"
                break;
            case 51:
                source = "https://i.imgur.com/EvYST0i.jpg"
                break;    
            case 52:
                source = "https://i.imgur.com/EMNhc0r.jpg"
                break;
            case 53:
                source = "https://i.imgur.com/92vQ9Xl.jpg"
                break;
            case 54:
                source = "https://i.imgur.com/GwT0eH5.jpg"
                break;        
            case 55:
                source = "https://i.imgur.com/7IiQQZn.jpg"
                break;
            case 56:
                source = "https://i.imgur.com/ZMDr3X7.jpg"
                break;
            case 57:
                source = "https://i.imgur.com/cged2cb.jpg"
                break;    
            case 58:
                source = "https://i.imgur.com/JrdRZk4.jpg"
                break;
            case 59:
                source = "https://i.imgur.com/O85ZeE7.jpg"
                break;
            case 60:
                source = "https://i.imgur.com/uNZ8C4y.jpg"
                break;
            case 61:
                source = "https://i.imgur.com/x6mEj6w.jpg"
                break;
            case 62:
                source = "https://i.imgur.com/8LG6DRa.jpg"
                break;
            case 63:
                source = "https://i.imgur.com/zLj6iNK.jpg"
                break;    
            case 64:
                source = "https://i.imgur.com/pZsxPFB.png"
                break;
            case 65:
                source = "https://i.imgur.com/B6TacPE.jpg"
                break;
            case 66:
                source = "https://i.imgur.com/thV7z5r.jpg"
                break;        
            case 67:
                source = "https://i.imgur.com/E037cxW.jpg"
                break;
            case 68:
                source = "https://i.imgur.com/E6gci4X.jpg"
                break;
            case 69:
                source = "https://i.imgur.com/N1cWCT9.jpg"
                break;    
            case 70:
                source = "https://i.imgur.com/PNx0UAK.jpg"
                break;
            case 71:
                source = "https://i.imgur.com/snQfwI1.jpg"
                break;
            case 72:
                source = "https://i.imgur.com/63ggVYW.jpg"
                break;
            case 73:
                source = "https://i.imgur.com/2FAkR3V.jpg"
                break;
            case 74:
                source = "https://i.imgur.com/Q78qlUW.jpg"
                break;
            case 75:
                source = "https://i.imgur.com/g82q1wJ.jpg"
                break;    
            case 76:
                source = "https://i.imgur.com/1DqaEAL.jpg"
                break;
            case 77:
                source = "https://i.imgur.com/G8USalY.jpg"
                break;
            case 78:
                source = "https://i.imgur.com/mTcBnhZ.jpg"
                break;        
            case 79:
                source = "https://i.imgur.com/CFRaRGT.jpg"
                break;
            case 80:
                source = "https://i.imgur.com/f05Wiq4.jpg"
                break;
            case 81:
                source = "https://i.imgur.com/OLicpwu.jpg"
                break;    
            case 82:
                source = "https://i.imgur.com/6qkBtXz.jpg"
                break;
            case 83:
                source = "https://i.imgur.com/H7HZy5c.jpg"
                break;
            case 84:
                source = "https://i.imgur.com/CUby0Io.jpg"
                break; 
            case 85:
                source = "https://i.imgur.com/lKNL056.jpg"
                break;
            case 86:
                source = "https://i.imgur.com/9XRc7kK.jpg"
                break;
            case 87:
                source = "https://i.imgur.com/f87BhRo.jpg"
                break;    
            case 88:
                source = "https://i.imgur.com/FjL4NxH.jpg"
                break;
            case 89:
                source = "https://i.imgur.com/wdQa5sJ.jpg"
                break;
            case 90:
                source = "https://i.imgur.com/9cYDrsL.jpg"
                break;        
            case 91:
                source = "https://i.imgur.com/YphYuoX.jpg"
                break;
            case 92:
                source = "https://i.imgur.com/tOPDDxq.jpg"
                break;
            case 93:
                source = "https://i.imgur.com/f1vV9Dc.jpg"
                break;    
            case 94:
                source = "https://i.imgur.com/amGWKFv.jpg"
                break;
            case 95:
                source = "https://i.imgur.com/zR5wRrz.jpg"
                break;
            case 96:
                source = "https://i.imgur.com/m1yy1le.jpg"
                break;  
            case 97:
                source = "https://i.imgur.com/VNr9P2I.jpg"
                break;    
            case 98:
                source = "https://i.imgur.com/P79N8bj.jpg"
                break;
            case 99:
                source = "https://i.imgur.com/naOZlA2.jpg"
                break;
            case 100:
                source = "https://i.imgur.com/ZvOEWnu.jpg"
                break;                                                                            
            default:
                break;
        }
        message.channel.sendMessage({files:[source]});
    }

        
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

module.exports = DiceRoll5Command;

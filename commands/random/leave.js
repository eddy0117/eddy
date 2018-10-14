const commando = require('discord.js-commando');

class LeaveCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'leave',
            group: 'random',
            memberName:'leave',
            description: 'nonee'
        }

        );
    }

    async run(message, args){
      
        
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
                    
        }
        
        
        
    }
}

module.exports = LeaveCommand;
const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client,{
            name: 'roll',
            group: 'random',
            memberName:'roll',
            description: 'Rolls s Picture(oil)'
        }

        );
    }

    async run(message, args,source){
        
    
        if( args >= 20 ){
            message.reply("誰叫你roll那麼多的");
            args = 0;
        } 
        
    for(var i = 0; i < args ; i ++ )
    {    
        var roll = Math.floor(Math.random() * 299) + 1;
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
            case 101:
                source = "https://i.imgur.com/Tn3COZm.jpg"
                break;   
            case 102:
                source = "https://i.imgur.com/hxxcKEK.jpg"
                break;   
            case 103:
                source = "https://i.imgur.com/pi4LsSH.jpg"
                break;    
            case 104:
                source = "https://i.imgur.com/pvdXVKz.jpg"
                break; 
            case 105:
                source = "https://i.imgur.com/hW6upbH.jpg"
                break;   
            case 106:
                source = "https://i.imgur.com/xYSZSsP.jpg"
                break;   
            case 107:
                source = "https://i.imgur.com/KigqcCG.jpg"
                break;    
            case 108:
                source = "https://i.imgur.com/egWR5UJ.jpg"
                break;                 
            case 109:
                source = "https://i.imgur.com/jEw10Xc.jpg"
                break;   
            case 110:
                source = "https://i.imgur.com/z82luFt.jpg"
                break;   
            case 111:
                source = "https://i.imgur.com/hPcBshx.jpg"
                break;    
            case 112:
                source = "https://i.imgur.com/JRKvynO.jpg"
                break;                 
            case 113:
                source = "https://i.imgur.com/pKPXTZ8.jpg"
                break;   
            case 114:
                source = "https://i.imgur.com/m0pqNK4.jpg"
                break;   
            case 115:
                source = "https://i.imgur.com/OiKUpxl.jpg"
                break;    
            case 116:
                source = "https://i.imgur.com/vUtpx8Z.jpg"
                break;     
            case 117:
                source = "https://i.imgur.com/pnXDpSZ.jpg"
                break;   
            case 118:
                source = "https://i.imgur.com/RGNOJ1M.jpg"
                break;   
            case 119:
                source = "https://i.imgur.com/BxYyoSy.jpg"
                break;    
            case 120:
                source = "https://i.imgur.com/c5tcoJE.jpg"
                break; 
            case 121:
                source = "https://i.imgur.com/CTciEJS.jpg"
                break;   
            case 122:
                source = "https://i.imgur.com/a7XtDy3.jpg"
                break;   
            case 123:
                source = "https://i.imgur.com/O9cYxID.jpg"
                break;    
            case 124:
                source = "https://i.imgur.com/e5rJmGR.jpg"
                break;                 
            case 125:
                source = "https://i.imgur.com/U84wKWZ.jpg"
                break;   
            case 126:
                source = "https://i.imgur.com/qIPgcOl.jpg"
                break;   
            case 127:
                source = "https://i.imgur.com/BwQwwIy.jpg"
                break;    
            case 128:
                source = "https://i.imgur.com/wcN9Z8K.jpg"
                break;                 
            case 129:
                source = "https://i.imgur.com/NLajPqn.jpg"
                break;   
            case 130:
                source = "https://i.imgur.com/Dels4qw.jpg"
                break;    
            case 131:
                source = "https://i.imgur.com/rREe2DR.jpg"
                break;
            case 132:
                source = "https://i.imgur.com/SF6xEXD.jpg"
                break;   
            case 133:
                source = "https://i.imgur.com/1oaRzaT.jpg"
                break;   
            case 134:
                source = "https://i.imgur.com/CCBXk4G.jpg"
                break;    
            case 135:
                source = "https://i.imgur.com/Y6N4i0I.jpg"
                break; 
            case 136:
                source = "https://i.imgur.com/Uc0pikN.jpg"
                break;   
            case 137:
                source = "https://i.imgur.com/QfCKNku.jpg"
                break;   
            case 138:
                source = "https://i.imgur.com/qs157Ib.jpg"
                break;    
            case 139:
                source = "https://i.imgur.com/K6pmPrE.jpg"
                break;                 
            case 140:
                source = "https://i.imgur.com/AS4J8Uz.jpg"
                break;   
            case 141:
                source = "https://i.imgur.com/DNsNQJT.jpg"
                break;   
            case 142:
                source = "https://i.imgur.com/UajUZcu.jpg"
                break;    
            case 143:
                source = "https://i.imgur.com/INaNwqv.jpg"
                break;                 
            case 144:
                source = "https://i.imgur.com/o6r8ybx.jpg"
                break;   
            case 145:
                source = "https://i.imgur.com/dEqEuqF.jpg"
                break;   
            case 146:
                source = "https://i.imgur.com/Sv0iG57.jpg"
                break;    
            case 147:
                source = "https://i.imgur.com/sV8UdjZ.jpg"
                break;
            case 148:
                source = "https://i.imgur.com/HzMNH99.jpg"
                break;   
            case 149:
                source = "https://i.imgur.com/UrpDpEn.jpg"
                break;   
            case 150:
                source = "https://i.imgur.com/CggEvNQ.jpg"
                break;    
            case 151:
                source = "https://i.imgur.com/ckM2PfO.jpg"
                break; 
            case 152:
                source = "https://i.imgur.com/cyXiUXW.jpg"
                break;   
            case 153:
                source = "https://i.imgur.com/v7xFKV1.jpg"
                break;   
            case 154:
                source = "https://i.imgur.com/sXd2Wiq.jpg"
                break;    
            case 155:
                source = "https://i.imgur.com/bjxRFCQ.jpg"
                break;                 
            case 156:
                source = "https://i.imgur.com/EJJxEjH.jpg"
                break;   
            case 157:
                source = "https://i.imgur.com/ALPtX8J.jpg"
                break;   
            case 158:
                source = "https://i.imgur.com/I1cKH41.jpg"
                break;    
            case 159:
                source = "https://i.imgur.com/7CJ8Ouv.jpg"
                break;                 
            case 160:
                source = "https://i.imgur.com/tE8y14L.jpg"
                break;   
            case 161:
                source = "https://i.imgur.com/zbSbIZ0.jpg"
                break;   
            case 162:
                source = "https://i.imgur.com/tKF6FeR.jpg"
                break;    
            case 163:
                source = "https://i.imgur.com/ug922b9.jpg"
                break;   
            case 164:
                source = "https://i.imgur.com/xF2eE5Y.jpg"
                break;   
            case 165:
                source = "https://i.imgur.com/tVhRDBG.jpg"
                break;   
            case 166:
                source = "https://i.imgur.com/mhWpBzT.jpg"
                break;    
            case 167:
                source = "https://i.imgur.com/fpn0sXj.jpg"
                break; 
            case 168:
                source = "https://i.imgur.com/WM6xZ46.jpg"
                break;   
            case 169:
                source = "https://i.imgur.com/Fthim03.jpg"
                break;   
            case 170:
                source = "https://i.imgur.com/ScoijRl.jpg"
                break;    
            case 171:
                source = "https://i.imgur.com/coGWJf3.jpg"
                break;                 
            case 172:
                source = "https://i.imgur.com/5kwYMXi.jpg"
                break;   
            case 173:
                source = "https://i.imgur.com/dyY4eyS.jpg"
                break;   
            case 174:
                source = "https://i.imgur.com/mY9X7cG.jpg"
                break;    
            case 175:
                source = "https://i.imgur.com/tPFyFoy.jpg"
                break;                 
            case 176:
                source = "https://i.imgur.com/kxcAyyO.jpg"
                break;   
            case 177:
                source = "https://i.imgur.com/JJc78rU.jpg"
                break;   
            case 178:
                source = "https://i.imgur.com/TiFaLwC.jpg"
                break;    
            case 179:
                source = "https://i.imgur.com/KRo0kJP.jpg"
                break;
            case 180:
                source = "https://i.imgur.com/KpCfagi.jpg"
                break;   
            case 181:
                source = "https://i.imgur.com/EjYzhRI.jpg"
                break;   
            case 182:
                source = "https://i.imgur.com/kYKC2dN.jpg"
                break;    
            case 183:
                source = "https://i.imgur.com/2437yyw.jpg"
                break; 
            case 184:
                source = "https://i.imgur.com/fwo1tpS.jpg"
                break;   
            case 185:
                source = "https://i.imgur.com/ij4NjP3.jpg"
                break;   
            case 186:
                source = "https://i.imgur.com/N7gc8Um.jpg"
                break;    
            case 187:
                source = "https://i.imgur.com/vgsudS5.jpg"
                break;                 
            case 188:
                source = "https://i.imgur.com/zhLxXhQ.jpg"
                break;   
            case 189:
                source = "https://i.imgur.com/QU8ei28.jpg"
                break;   
            case 190:
                source = "https://i.imgur.com/1KGmD9g.jpg"
                break;    
            case 191:
                source = "https://i.imgur.com/pi4gCOR.jpg"
                break;                 
            case 192:
                source = "https://i.imgur.com/rAdWYgH.jpg"
                break;   
            case 193:
                source = "https://i.pximg.net/img-original/img/2018/10/17/00/00/01/71215477_p0.png"
                break;   
            case 194:
                source = "https://i.pximg.net/img-original/img/2018/10/17/00/00/01/71215479_p0.png"
                break;    
            case 195:
                source = "https://i.pximg.net/img-original/img/2018/10/17/00/00/00/71215474_p0.png"
                break;  
            case 196:
                source = "https://i.pximg.net/img-original/img/2018/10/17/00/00/01/71215475_p0.png"
                break;   
            case 197:
                source = "https://i.imgur.com/ui0CPgo.jpg"
                break;   
            case 198:
                source = "https://i.imgur.com/dUrjL7P.jpg"
                break;    
            case 199:
                source = "https://i.imgur.com/yEEemAb.jpg"
                break; 
            case 200:
                source = "https://i.imgur.com/17ncVDS.jpg"
                break;  
        case 201: 
        source = "https://i.imgur.com/HghX6Sk.jpg" 
        break;
case 202: 
        source = "https://imgur.com/uZ9Q27e.jpg" 
        break;
case 203: 
        source = "https://imgur.com/cKoNpp5.jpg" 
        break;
case 204: 
        source = "https://imgur.com/Vm8hmyG.jpg" 
        break;
case 205: 
        source = "https://imgur.com/gJIAoKX.jpg" 
        break;
case 206: 
        source = "https://imgur.com/nlrNCHA.jpg" 
        break;
case 207: 
        source = "https://imgur.com/rgDeGjd.jpg" 
        break;
case 208: 
        source = "https://imgur.com/O3CNbxN.jpg" 
        break;
case 209: 
        source = "https://imgur.com/EqaB5R0.jpg" 
        break;
case 210: 
        source = "https://imgur.com/Fq8sqMf.jpg" 
        break;
case 211: 
        source = "https://imgur.com/VvCMdVR.jpg" 
        break;
case 212: 
        source = "https://imgur.com/U0sesfb.jpg" 
        break;
case 213: 
        source = "https://imgur.com/vtlcZd4.jpg" 
        break;
case 214: 
        source = "https://imgur.com/ijxAMA4.jpg" 
        break;
case 215: 
        source = "https://imgur.com/MjFOjVo.jpg" 
        break;
case 216: 
        source = "https://imgur.com/DP3LbYE.jpg" 
        break;
case 217: 
        source = "https://imgur.com/gNqMufl.jpg" 
        break;
case 218: 
        source = "https://imgur.com/pKZkb1k.jpg" 
        break;
case 219: 
        source = "https://imgur.com/RIruu2R.jpg" 
        break;
case 220: 
        source = "https://imgur.com/RYnLB89.jpg" 
        break;
case 221: 
        source = "https://imgur.com/xTGlcdo.jpg" 
        break;
case 222: 
        source = "https://imgur.com/ZPTWVNI.jpg" 
        break;
case 223: 
        source = "https://imgur.com/ICmHDfu.jpg" 
        break;
case 224: 
        source = "https://imgur.com/k2ZVyTD.jpg" 
        break;
case 225: 
        source = "https://imgur.com/XDEHtP5.jpg" 
        break;
case 226: 
        source = "https://imgur.com/jLJHocn.jpg" 
        break;
case 227: 
        source = "https://imgur.com/nqafEqk.jpg" 
        break;
case 228: 
        source = "https://imgur.com/SksTnD9.jpg" 
        break;
case 229: 
        source = "https://imgur.com/OZVXuQV.jpg" 
        break;
case 230: 
        source = "https://imgur.com/KZQHy3E.jpg" 
        break;
case 231: 
        source = "https://imgur.com/H6M9SH9.jpg" 
        break;
case 232: 
        source = "https://imgur.com/GaicGjU.jpg" 
        break;
case 233: 
        source = "https://imgur.com/gNIhJyx.jpg" 
        break;
case 234: 
        source = "https://imgur.com/9dexFbn.jpg" 
        break;
case 235: 
        source = "https://imgur.com/t3eO8u3.jpg" 
        break;
case 236: 
        source = "https://imgur.com/HSav2qg.jpg" 
        break;
case 237: 
        source = "https://imgur.com/AilnYpO.jpg" 
        break;
case 238: 
        source = "https://imgur.com/NWpGiKN.jpg" 
        break;
case 239: 
        source = "https://imgur.com/XGvT5ig.jpg" 
        break;
case 240: 
        source = "https://imgur.com/igrYRum.jpg" 
        break;
case 241: 
        source = "https://imgur.com/Y8CN8Gf.jpg" 
        break;
case 242: 
        source = "https://imgur.com/X4zw5J2.jpg" 
        break;
case 243: 
        source = "https://imgur.com/00vMcut.jpg" 
        break;
case 244: 
        source = "https://imgur.com/L4aQMvm.jpg" 
        break;
case 245: 
        source = "https://imgur.com/Vtdl3j3.jpg" 
        break;
case 246: 
        source = "https://imgur.com/qjFRcnS.jpg" 
        break;
case 247: 
        source = "https://imgur.com/30Tp3xS.jpg" 
        break;
case 248: 
        source = "https://imgur.com/5MLS2sA.jpg" 
        break;
case 249: 
        source = "https://imgur.com/q3Aenm3.jpg" 
        break;
case 250: 
        source = "https://imgur.com/pMADoMM.jpg" 
        break;
case 251: 
        source = "https://imgur.com/Invd4Ji.jpg" 
        break;
case 252: 
        source = "https://imgur.com/6O237Lg.jpg" 
        break;
case 253: 
        source = "https://imgur.com/xtp8K3L.jpg" 
        break;
case 254: 
        source = "https://imgur.com/Y5hfAg9.jpg" 
        break;
case 255: 
        source = "https://imgur.com/cmxC1Bw.jpg" 
        break;
case 256: 
        source = "https://imgur.com/97ADzvA.jpg" 
        break;
case 257: 
        source = "https://imgur.com/aZQ1zHm.jpg" 
        break;
case 258: 
        source = "https://imgur.com/uSppGNu.jpg" 
        break;
case 259: 
        source = "https://imgur.com/doaYln5.jpg" 
        break;
case 260: 
        source = "https://imgur.com/Wha4SPo.jpg" 
        break;
case 261: 
        source = "https://imgur.com/U3kEEB0.jpg" 
        break;
case 262: 
        source = "https://imgur.com/1VP4XSS.jpg" 
        break;
case 263: 
        source = "https://imgur.com/cmghDlO.jpg" 
        break;
case 264: 
        source = "https://imgur.com/y8NInss.jpg" 
        break;
case 265: 
        source = "https://imgur.com/a5k0pgZ.jpg" 
        break;
case 266: 
        source = "https://imgur.com/mwBMZkd.jpg" 
        break;
case 267: 
        source = "https://imgur.com/2ZoKlQM.jpg" 
        break;
case 268: 
        source = "https://imgur.com/8xLWq3r.jpg" 
        break;
case 269: 
        source = "https://imgur.com/2xWm981.jpg" 
        break;
case 270: 
        source = "https://imgur.com/yaQtKcv.jpg" 
        break;
case 271: 
        source = "https://imgur.com/kli6If2.jpg" 
        break;
case 272: 
        source = "https://imgur.com/vLAkVLH.jpg" 
        break;
case 273: 
        source = "https://imgur.com/JhdAOLv.jpg" 
        break;
case 274: 
        source = "https://imgur.com/XYxbEyg.jpg" 
        break;
case 275: 
        source = "https://imgur.com/h1A8izL.jpg"
        break;
case 276: 
        source = "https://imgur.com/beLfPGf.jpg" 
        break;
case 277: 
        source = "https://imgur.com/WU9wYY2.jpg" 
        break;
case 278: 
        source = "https://imgur.com/7ui5Vpd.jpg" 
        break;
case 279: 
        source = "https://imgur.com/cVkfsXH.jpg" 
        break;
case 280: 
        source = "https://imgur.com/v5xV0bJ.jpg" 
        break;
case 281: 
        source = "https://imgur.com/mphsuYq.jpg" 
        break;
case 282: 
        source = "https://imgur.com/e0LBkD0.jpg" 
        break;
case 283: 
        source = "https://imgur.com/gc03Rhh.jpg" 
        break;
case 284: 
        source = "https://imgur.com/oaHdCdR.jpg" 
        break;
case 285: 
        source = "https://imgur.com/89HOuqg.jpg" 
        break;
case 286: 
        source = "https://imgur.com/0MOpIJi.jpg" 
        break;
case 287: 
        source = "https://imgur.com/x6hbayr.jpg" 
        break;
case 288: 
        source = "https://imgur.com/xLdTSa3.jpg" 
        break;
case 289: 
        source = "https://imgur.com/SdLSeBK.jpg" 
        break;
case 290: 
        source = "https://imgur.com/jumU3WR.jpg" 
        break;
case 291: 
        source = "https://imgur.com/AQIocR9.jpg" 
        break;
case 292: 
        source = "https://imgur.com/5iB5ePO.jpg" 
        break;
case 293: 
        source = "https://imgur.com/KNIY58n.jpg" 
        break;
case 294: 
        source = "https://imgur.com/sStZpsj.jpg" 
        break;
case 295: 
        source = "https://imgur.com/oFZgDnP.jpg" 
        break;
case 296: 
        source = "https://imgur.com/pwqejBK.jpg" 
        break;
case 297: 
        source = "https://imgur.com/SbBHc47.jpg" 
        break;
case 298: 
        source = "https://imgur.com/QAYBbWq.jpg" 
        break;
case 299: 
        source = "https://imgur.com/U8Lz93q.jpg" 
        break;
case 300: 
        source = "https://imgur.com/AB0mcjW.jpg" 
        break;
            default:
                break;
            }
        //message.channel.sendMessage(roll);
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

module.exports = DiceRollCommand;

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = 'ba';

const token = 'NjkxMjExNzQzNTE0MzI5MTMw.XncrHw.knNfbyL0T9c82AA5M-KMKvKGBnk';

bot.on('ready', () => {
  //console.log('Botu o pornit si incepe sa manance cartofi prajiti!');
  console.log(`Salut! ${bot.user.username} e on si o inceput sa consume cartofi prajiti!`);

  bot.user.setActivity('Somalia cum mananca Cartofi prajiti!', { type: 'STREAMING' });
})
bot.on('message', message => {
  let args = message.content.substring(prefix.length).split(' ');
  if(!message.content.startsWith(prefix))return;
  switch (args[0]) {
    case 'prezinta-te':
      message.channel.send('Salut!Eu sunt Botu Somalez sunt un bot de discord si functionez pe baza de cartofi prajiti! :))')
      break;
    case 'injura':
      mention = message.mentions.users.first();
      if (args[1] === null) message.channel.send('zi pe cine sa injur fmm!')
      else
         if (mention == '689758567653572782') message.channel.send('Hai ca ma injur singur daca e,luate as in yatagan!')
        else {
          var facts = ["Prima data cand ai vazut aspirator ai zis ca i furnicar","Sa ti fut mortii in fata portii", "Ia mi-l du-mi-l si condu-mi-l!", "Esti un bulanjiu", "do you are have stupid?", "Imi pare rau ca asta o vrut sa te injure...lasa-l sa se calmeze", "N am ce sa zic de tine, te o batut destul viata", "ai fata de spate", "ziceai:'Cu bac sau fara bac semintele acelasi gust are' dar acum nici bani de seminte n ai.","Date n pula cu satelitu","esti Dancila man,superputerea ta ii prostia","Futa te Soarele","asta de o vrut sa te injure ii mai prost ca tine"];
          var fact = Math.floor(Math.random() * facts.length);
          message.channel.send('<@' + mention + '>' + ' ' + facts[fact]);
        }
      break;
    case 'dans':
      message.channel.send("I m vibin'", { files: ["./dans.gif"] });
      break;
    case 'clear':
      if(!message.member.permissions.has('ADMINISTRATOR'))return message.reply("Nu ai permisiuni");
      else {
        if (!args[1]) return message.reply('N-ai zis cat sa sterg')
        message.channel.bulkDelete(args[1]);
        break;
      }
      break;
    case 'muzica':
      mention = message.mentions.users.first();
      var muz = ["Adrian Minune", "Jador", "5Gang", "Alex Velea", "Abi talent", "Guta","Alex Velea","Abi Talent","Nicu de la Cazanesti","Tzanca Uraganu"]
      var mem = Math.floor(Math.random() * muz.length);
      var mem1 = Math.floor(Math.random() * muz.length);
      if (mem != mem1) message.channel.send('Uite ce cantareti asculta ' + '<@' + mention + '>' + ' ' + muz[mem] + ' , ' + muz[mem1]);
      else { var mem1 = Math.floor(Math.random() * muz.length); message.channel.send('Uite ce cantareti asculta ' + '<@' + mention + '>' + ' ' + muz[mem] + ' , ' + muz[mem1]); }
      break;
    case 'haipesv':
      message.channel.send("@everyone hai pe server!");
      break;
    case 'factiuni':
      let guild = await message.guild.fetchMembers();
      let politie = '699302117604720741';
      let medici = '699302117604720749';
      let mafia1 = '699302117600657570';
      let mafia2 = '699302117596463185';
      let polo = guild.roles.get(politie).members.size;
      let medic = guild.roles.get(medici).members.size;
      let maf1 = guild.roles.get(mafia1).members.size;
      let maf2 = guild.roles.get(mafia2).members.size;
  
      message.channel.send(memberCount + " members have this role!");
      message.channel.send({
        embed: {
          color: '#00fff2',
          author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
          },
          title: "Aceasta este lista oamenii din factiuni:",
          fields: [{
            name: "Politie",
            value: "In Politie sunt  " + polo + " playeri."
          },
          {
            name: "EMS",
            value: "In EMS sunt  " + medic + " playeri."
          },
          {
            name: "Despiadado",
            value: "In despiadado sunt  " + maf1 + " playeri."
          },
          {
            name: "Peaky Blinders",
            value: "In Peaky Blinders sunt  " + maf2 + " playeri."
          }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.avatarURL,
            text: "© Somalia e smeker si detine acest bot!"
          }
        }
      });
    case 'help':
      /**let ajutor=new Discord.RichEmbed()
      .setColor('#fff')
      .setTitle("Lista cu comenzile mele:")
      .setThumbnail(message.guild.iconURL)
      .setAuthor('Somalia',message.guild.iconURL)
      .addField("**Test**",'${message.guild.name}',true)
      message.channel.send({embed: ajutor});**/
      message.channel.send({
        embed: {
          color: '#00fff2',
          author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
          },
          title: "Aceasta este lista cu toate comenzile mele:",
          fields: [{
            name: "Prefix",
            value: "Prefixul meu este 'ba'"
          },
          {
            name: "help",
            value: "Iti arata acest meniu!"
          },
          {
            name: "clear {numar}",
            value: "Curata cate mesaje doresti!(Trebuie sa ai permisiuni de admin!)"
          },
          {
            name: "hatz",
            value: "Hatz gionule! XD"
          },
          {
            name: "haipesv",
            value: "Chem lumea pe server!"
          },
          {
            name: "prezentare",
            value: "Iti dau linkul catre prezentarea serverului!"
          },
          {
            name: "injura {tag cuiva}",
            value: "Injur pe cineva in locul tau! XD"
          },
          {
            name: "muzica {tag cuiva}",
            value: "Iti spun 2 dintre cantaretii favoriti ai cuiva!"
          },
          {
            name: "Info:",
            value: "Urmeaza ca Somalia sa mai adauge comenzi...cand are chef :P"
          }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.avatarURL,
            text: "© Somalia e smeker si detine acest bot!"
          }
        }
      });
      break;
      case 'chainsaw':
        message.reply("BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        break;
  }
})
bot.login(process.env.token);

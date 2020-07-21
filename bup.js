const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = 'ba';

const token = '';

bot.on('ready', () => {
  //console.log('Botu o pornit si incepe sa manance cartofi prajiti!');
  console.log(`Salut! ${bot.user.username} e on si o inceput sa consume cartofi prajiti!`);

  bot.user.setActivity('Somalia cum mananca Cartofi prajiti!', { type: 'STREAMING' });
})
bot.on('message', (message) => {
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
          else if(mention == '471568575874859030')message.channel.send('Hai ca l injur pe tata luate as in abie pe tine si pe familia ta!Sa sugi pula la tot Paletou')
         else {
          var facts = ["Prima data cand ai vazut aspirator ai zis ca i furnicar","Sa ti fut mortii in fata portii", "Ia mi-l du-mi-l si condu-mi-l!", "Esti un bulanjiu", "do you are have stupid?", "Imi pare rau ca asta o vrut sa te injure...lasa-l sa se calmeze", "N am ce sa zic de tine, te o batut destul viata", "ai fata de spate", "ziceai:'Cu bac sau fara bac semintele acelasi gust are' dar acum nici bani de seminte n ai.","Date n pula cu satelitu","ba baga-mi-as pula peste ma-ta in casa daca te scutur odata cad pulele din tine ca merele din pom in secunda 2 luati-as toata rasa in pula de la maimuta la windows 8 da-te-n rasa si familionu ma-tii ca-ti bag pula in gingie pana faci ca maimuta dilie pe tine te-a crescut ma-ta in orfelinat te-a legat cu lantu de pat si te-a batut cu biciu peste nas daca merg in maini iti fac in ciuda vezi ca ai gura intro parte nebunule bai corp urat nu vezi ce cap de bidon turtit ai luati-as familia pe carici sa imi bag pula in rasa ma-tii de copil batut de soarta care esti daca iti fut un pumn iti fac garaj in gura curva masculina ce esti baga-mi-as pula in gatu ma-tii ca te rup in 2 nu vezi ca iti fac sobolanii hunga bunga in stomac iti fac paianjenii bora bora pe perete iti patineaza buricu de foame iti fermenteaza sperme intre dinti esti neiesit din casa de 2 primaveri si 3 ierni futu-ti mortii ma-tii de pisat la cur ce esti caca-m-as pe fata ta de copil imatur ce esti da-te-n mortii ma-tii de cioara matrafoxata ce esti sa te fut in gura de copil malformat sa ma cac in pizda ma-tii cu bucati de pula intra pula-n curu tau ca metrou in depou baga-mi-as pula in ma-ta pana ii fac pizda tunel de metrou parerea mea e sa va duceti toti in pula mea ca e destula pentru toata lumea sa-mi luati cacatu la polizor pana va sare pana in ochi baga-mi-ati limba-n gaura curului sa-mi gadilati hemoroizii sa-ti iau toti mortii in pula de obosit baga-mi-as pula in natia ma-tii ca bag cutitu in tine futu-ti parintii ma-tii de ghertoi ai nasu ala zici ca e stop de trabant ai urechile alea zici ca esti taxi-u cu usile deschise daca iti fut un pumn in gura iti fac compartiment intre masele vezi-ti dreacu de amaraciunea ta ma saracie ce esti te daram din temelii cand vb eu tu taci ma caine ce esti ca imi bag pula peste ma-ta in casa","Futa te Soarele","asta de o vrut sa te injure ii mai prost ca tine","Iti danseaza sobolanii huga buga in stomac si tu vii sa comentezi la prietenu meu","Sa sugi pula la tot Paletou"];
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
    case 'online':
      // First we use guild.members.fetch to make sure all members are cached
        message.guild.members.fetch().then(fetchedMembers => {
      	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online' || member.presence.status === 'idle' || member.presence.status === 'dnd' ); 
	        message.channel.send(`Sunt **${totalOnline.size}** membrii online pe discord!`);
});
      break;
      case 'factiuni':
      /** First we use guild.members.fetch to make sure all members are cached
        message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(role => role.name === "ownah");
        console.log(totalOnline);
        console.log(totalOnline.size);
          message.channel.send(`**${totalOnline.size}**`);
          
}); **/
        let sias = "699302117600657574";
        let memberssias = message.guild.roles.cache.get(sias).members;
        console.log(`Got ${memberssias.size} members with that role.`);
        ///////////////////////////////////
        let politie = "699302117604720741";
        let memberspolo = message.guild.roles.cache.get(politie).members;
        console.log(`Got ${memberspolo.size} members with that role.`);
        //////////////////////////////////
        let ems = "699302117604720749";
        let memberems = message.guild.roles.cache.get(ems).members;
        console.log(`Got ${memberems.size} members with that role.`);
        //////////////---------------MAFII----------------////////////////////
        let bdeoras = "699302117596463185";
        let memberoras = message.guild.roles.cache.get(bdeoras).members;
        console.log(`Got ${memberoras.size} members with that role.`);
        //////////////////////////////////
        let gypsy = "711074084955488297";
        let membergypsy = message.guild.roles.cache.get(gypsy).members;
        console.log(`Got ${membergypsy.size} members with that role.`);
        /////////////////////////////////
        let despacito = "699302117600657570";
        let memberdespa = message.guild.roles.cache.get(despacito).members;
        console.log(`Got ${memberdespa.size} members with that role.`);
        //////////////////////////////////
        let aterror = "719563293072556173";
        let memberterror = message.guild.roles.cache.get(aterror).members;
        console.log(`Got ${memberterror.size} members with that role.`);
        //////////////////////////////////
        let bratva = "711073323445911592";
        let memberb = message.guild.roles.cache.get(bratva).members;
        console.log(`Got ${memberb.size} members with that role.`);
        //////////////////////////////////
        let yakuza = "699302117596463189";
        let memberyak = message.guild.roles.cache.get(yakuza).members;
        console.log(`Got ${memberyak.size} members with that role.`);
        /////////////////////////////////
        let cdep = "699302117596463193";
        let casa = message.guild.roles.cache.get(cdep).members;
        console.log(`Got ${casa.size} members with that role.`);
        ///////////////////////////----------SEND----------////////////////////////////
        var embed = new Discord.MessageEmbed()
    .setTitle("Oameni din Factiuni")
    .setTimestamp()
    .addField("Oameni in Politie : ", `${memberspolo.size}`)
    .addField("Oameni in S.i.a.s : ", `${memberssias.size}`)
    .addField("Oameni in Ems : ", `${memberems.size}`)
    .addField("Oameni in GypsyKings : ", `${membergypsy.size}`)
    .addField("Oameni in Yakuza : ", `${memberyak.size}`)
    .addField("Oameni in BaietiDeOras", `${memberoras.size}`)
    .addField("Oameni in Casa de Papel : ", `${casa.size}`)
    .addField("Oameni in Despiadado : ", `${memberdespa.size}`)
    .addField("Oameni in Bratva : ", `${memberb.size}`)
    .addField("Oameni in AlliedTerror : ", `${memberterror.size}`)
    .setColor('#e67e22')
    message.channel.send({
    embed
    })
      break;
      case 'status':
        mention = message.mentions.users.first();
        if(mention == '471568575874859030' || mention == '539885869721583646')
        {
          console.log(mention.presence.status);
          if(mention.presence.status == 'online')message.channel.send("E online il puteti spama ))");
          else if (mention.presence.status == 'dnd' || mention.presence.status == 'offline' || mention.presence.status == 'idle')message.channel.send("Se da offline ca un mare gay da el e online dati i mesaje ))");
        }
        else 
        {
          if(mention.presence.status == 'online')message.channel.send("<@"+mention+"> e online dati i la buci");
          else if(mention.presence.status == 'dnd')message.channel.send("<@"+mention+"> e ocupat el baaa vrea sa dea laba in liniste si voi intrebati de el...")
          else if(mention.presence.status == 'idle')message.channel.send("<@"+mention+"> doarme...")
          else message.channel.send("<@"+mention+"> se da offline da 100% e la pc")
        }
        break;
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

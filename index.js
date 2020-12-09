const Discord=require("discord.js");
const config=require("./config.json");
const client=new Discord.Client();
client.on('ready', () =>{
    console.info(`logged in as ${client.user.tag}!`);
});

client.on('message', msg  =>
{
    if(msg.content=='!ping')
    {
        msg.reply('pong');
    }
});

client.on('message', msg =>
{
 if(msg.author.bot)return;

});

client.on('message',msg=>
{
 if(msg.content=='!veman')
 {
     msg.reply('semen');
 }
 else if(msg.content=='!deexith')
 {
     msg.reply('baaro maccha umma umma and also chutney on hair');
 }
 else if(msg.content=='!alok')
 {
     msg.reply('an attention whore who makes jokes to boost up his confidence and will probably die alone');
 }
 else if(msg.content=='!lahari')
 {
     msg.reply('dont u mean comod breaker,oh shit');
 }

 else if(msg.content=='!harshita')
{
    msg.reply('oh lonely tiktoker,but now even tiktok is gone,what is she now,just lonely');
}

else if(msg.content=='!fuckyoualobot')
{
    msg.reply('nope too tired from doing your mum,yes she did a bot');
}
else if(msg.content=='!truthbomb')
{
    msg.reply('abhishek bacchan and billy butchers from the boys are the same');
}
else if (msg.content=='waah' || msg.content=='wah')
{
    msg.reply('oof that person really didnt like your lame joke');
}
});
var min=0;
var max=2;
var rand=Math.floor(Math.random()*(max-min+1 )+min);
client.on('message', msg =>
{
    if(msg.content=='!truthbomb')
    {
  if(rand==0)
  {
    msg.reply('office is better than friends and is the best comedy tv show');
  }
  else if(rand==1)
  {
    msg.reply('abhishek bacchan and billy butchers from the boys are the same except one of them has the same amount of talent amitabh bacchan has');
  }
  else if(rand==2)
  {
    msg.reply('the guy who made this has a friend named nik who is really hot,u should talk to him@nik_7_');
  }
 
}

});



client.login(config.BOT_TOKEN);
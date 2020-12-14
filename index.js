const Discord = require("discord.js");
const config = require("./config.json");
const config2=require ("./config2.json");
const client = new Discord.Client();
const fetch = require('node-fetch');
const request =require('request');
const argv = require('yargs').argv;
client.on('ready', () => {
    console.info(`logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content == '!ping') {
        msg.reply('pong');
    }
});

client.on('message', msg => {
    if (msg.author.bot) return;

});


//replying to friends part

client.on('message', msg => {
    if (msg.content == '!veman') {
        msg.reply('semen');
    }
    else if (msg.content == '!deexith') {
        msg.reply('baaro maccha umma umma and also chutney on hair');
    }
    else if (msg.content == '!alok') {
        msg.reply('an attention whore who makes jokes to boost up his confidence and will probably die alone');
    }
    else if (msg.content == '!lahari') {
        msg.reply('dont u mean comod breaker,oh shit');
    }

    else if (msg.content == '!harshita') {
        msg.reply('oh lonely tiktoker,but now even tiktok is gone,what is she now,just lonely');
    }

    else if (msg.content == '!fuckyoualobot') {
        msg.reply('nope too tired from doing your mum,yes she did a bot');
    }
    else if (msg.content == '!truthbomb') {
        msg.reply('abhishek bacchan and billy butchers from the boys are the same');
    }
    else if (msg.content == 'waah' || msg.content == 'wah') {
        msg.reply('stop saying that, nobody can reply to that');
    }
});

//weather api 

client.on('message', msg =>
{

    //if message includes !weather and city starts with a letter
    if(msg.content.includes('!weather')){

        let City=msg.content.split(" ")[1];
        if(City.startsWith("0",1) ){
            msg.reply("invalid country bro,stop this madness please i have children,try again,syntax:'!weather <cityname>'");
        }
        else //this is the true condition,where it uses the apikey from openWeatherapi.org and fetches the info
        {
            let apiKey=(config2.WEATHER_KEY);
            let city=argv.c || City;
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

            const weatherPics = {
                "Clouds": "☁️ ☁️",
                "Rain": "☔️",
                "Haze": "🌫",
                "Thunderstorm": "⛈",
                "Sunny": "☀️",
                "Mist": "🌫",
                "Clear": "☀️"
              }

            request(url, function (err, response, body) {
                if(err){
                  console.log('error:', error);
                } else {
                    let weather=JSON.parse(body);//after fetching the info ,it converts it into json format,so it is easier to read and also use it 
                    let cweather=weather.weather[0].main
                    let message=`It's ${weather.main.temp} degree celsius in 🎯${weather.name}, ${weather.sys.country} , ${weatherPics[cweather]},oooo ${cweather}`;

                  console.log('');
                  console.log(message);
                  console.log(body);
                  msg.reply(message);
                  console.log(' ');
                  console.log(cweather);
                }
              });
        }
          
        

    }
});
 



client.login(config.BOT_TOKEN);

                

    
const TelegramBot = require('node-telegram-bot-api');
const fs = require("fs");
const path = require('path');
const { localDB } = require('./subjects');
const bodyParser = require('body-parser');
// replace the value below with the Telegram token you receive from @BotFather

const express = require('express');


const botToken = '6902681746:AAFELtFHrXmJZ-ywamUznEp4Y1fSC-N3qwM';
const bot = new TelegramBot(botToken,{polling:false});

bot.setWebHook("https://tiny-rose-pig-hose.cyclic.app/webhook"+botToken)

const app = express();
app.use(bodyParser.json());


app.post('/webhook'+botToken, (req, res) => {
    const data = req.body; // البيانات التي تم إرسالها من الويب هوك
    bot.processUpdate(data)
    res.sendStatus(200);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server is running ' + port);
});

// bot.on("polling_error", console.log);
const current = {
  level:0,
  term:0,
  subj:{
    type: "",
    isWorkable:false,
    folder:"",
  },
};


bot.on('message', (msg) => {

  const chatId = msg?.chat?.id , mesgId = msg?.message_id , text = msg?.text;
  if (text == 'من عمك') {
    bot.sendMessage(chatId,"علي باوزير ")
  }
  if (text == "قايمه" || text == "قائمه" || text == "قائمة" ||text == "قايمة" || text == "/start"  ) {
    bot.sendMessage(chatId,"       .       حدد المستوى الدراسي       ^_^      ",
    {
      reply_markup:{
        inline_keyboard:[
          [{text:"مستوى اول", callback_data:JSON.stringify({type:"level",data:1,})}],
          [{text:"مستوى ثاني",callback_data:JSON.stringify({type:"level",data:2,})}],
          [{text:"مستوى ثالث",callback_data:JSON.stringify({type:"level",data:3,})}],
          [{text:"مستوى رابع",callback_data:JSON.stringify({type:"level",data:4,})}],
        ]
      }
    });
  }

  

});



const sendbooks = (type = 0 || 1,chatId,data) => { 
    const folderPath = __dirname + "/computer scince/level_"+ data?.lv + "/term_" + data?.trm + "/" + data.fol + "/" + type;
    if (fs.existsSync(folderPath)) {
        fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error('حدث خطأ في قراءة محتوى المجلد:', err);
          return;
        }
        if (files.length == 0) {
          bot.sendMessage(chatId,"🫢 ops !!");
        } else {
          bot.sendMessage(chatId,"---sending---");
          bot.sendDocument(chatId,path.join(folderPath, files[0]))
          // files.map(file => {
          //   const filePath = path.join(folderPath, file);
          //   bot.sendMessage(chatId,"---wait---");
          //   bot.sendDocument(chatId,filePath).then((res)=>{
          //     console.log(res,"file sended");
          //   })
          // });
        }
      });
      
   } else {
    bot.sendMessage(chatId,"🫢 ops !!");
   }
 }

const sendChannels = async (type = 0 || 1,chatId,data) => { 
  const folderPath = __dirname + "/computer scince/level_"+ data?.lv + "/term_" + data?.trm + "/" + data.fol + "/youtube.json";
  if (fs.existsSync(folderPath)) {
    const red = JSON.parse(fs.readFileSync(folderPath));
    if (red && red?.length != 0) {
      red.map((ele)=>{
        bot.sendMessage(chatId,`
         ${ele?.desc}
         إسم القناة : ${ele?.channelName} .
         الرابط : ${ele?.link}.
        `)
      })
    }else{
      bot.sendMessage(chatId,"🫢 ops !!");
    }
  } else {
    bot.sendMessage(chatId,"🫢 ops !!");
  }
 

}


bot.on("callback_query",(Q)=>{
  const query = JSON.parse(Q.data) , mesgId = Q.message.message_id;
  const chatId = Q.message.chat.id;

  switch (query.type) {
      case "level":{
        // ## Current Level ##
        if (query.data > 0) {
          current.level = query.data;
          bot.editMessageText(" حدد الترم         ^_^       ",
          {
            chat_id:chatId,
            message_id:mesgId,
            reply_markup:{
              inline_keyboard:[
                [{text:"الترم الأول",callback_data:JSON.stringify({type:"term",data:{term:1,level:query.data},})}],
                [{text:"الترم الثاني",callback_data:JSON.stringify({type:"term",data:{term:2,level:query.data},})}],
              ]
            }
          });
        }
        break;
      }
      // ############
      // ############ 1
      // ############
      case "term":{
        // ## Current Term ##
        current.term = query.data.term;
        let subjects = localDB["level" + query?.data?.level ]["term" + (query?.data?.term)];

        if (query.data.term > 0) {

          bot.editMessageText(" إختر المادة       ^_^       " ,
          {
            chat_id:chatId,
            message_id:mesgId,
            reply_markup:{
              inline_keyboard:subjects,
            }
          });
        }
        break;
      }
      // ############
      // ############ 2
      // ############
      case "subj":{
        // ## Current subject ##
        current.subj = query.data;
        if (query.data?.isWorkable) {
          bot.editMessageText("/                  ^_^                    \\",
        {
          chat_id:chatId,
          message_id:mesgId,
          reply_markup:{
            inline_keyboard : [
            [{text:"ملازم النظري 📚",callback_data:JSON.stringify({type:"books",lv:current.level,trm:current.term,fol:query.data.folder})}],
            [{text:"ملازم العملي 📚",callback_data:JSON.stringify({type:"WorkableBooks",lv:current.level,trm:current.term,fol:query.data.folder})}],
            [{text:"نماذج إختبارات 📃",callback_data:JSON.stringify({type:"exams",lv:current.level,trm:current.term,fol:query.data.folder})}],
            [{text:" قنوات يوتيوب ▶️",callback_data:JSON.stringify({type:"youtubechannels",lv:current.level,trm:current.term,fol:query.data.folder})}]
          ],
          }
        });
        } else {
          bot.editMessageText("/                  ^_^                    \\",
        {
          chat_id:chatId,
          message_id:mesgId,
          reply_markup:{
            inline_keyboard : [
            [{text:"الملازم 📚",callback_data:JSON.stringify({type:"books",lv:current.level,trm:current.term,fol:query.data.folder})}],
            [{text:"نماذج إختبارات 📃",callback_data:JSON.stringify({type:"exams",lv:current.level,trm:current.term,fol:query.data.folder})}],
            [{text:" قنوات يوتيوب ▶️",callback_data:JSON.stringify({type:"youtubechannels",lv:current.level,trm:current.term,fol:query.data.folder})}]
          ],
          }
        });
        }
        break;
      }
      case "WorkableBooks":{
        //  يعني0 الملازم النظري و 1 للملازم العملي
        sendbooks(1,chatId,query)
        break;
      }
      case "exams":{
        //  يعني0 الملازم النظري و 1 للملازم العملي
        sendbooks("exams",chatId,query)
        break;
      }
      case "books":{
        //  يعني0 الملازم النظري و 1 للملازم العملي
        sendbooks(0,chatId,query)
        break;
      }
      case "youtubechannels":{
        sendChannels(0,chatId,query)
        break;
      }

    default:
      break;
  } 



})



// /**
//  * This example demonstrates setting up a webook, and receiving
//  * updates in your express app
//  */
// /* eslint-disable no-console */

const { localDB } = require("./subjects");

// const TOKEN = "6902681746:AAFELtFHrXmJZ-ywamUznEp4Y1fSC-N3qwM";
// const url = "https://tiny-rose-pig-hose.cyclic.app";
// const port = process.env.PORT || 3000 ;

// const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');

// // No need to pass any parameters as we will handle the updates with Express
// const bot = new TelegramBot(TOKEN);

// // This informs the Telegram servers of the new webhook.


// const app = express();

// // parse the updates to JSON
// app.use(express.json());

// // We are receiving updates at the route below!
// app.post(`/webhook`+TOKEN, (req, res) => {
//   bot.processUpdate(req.body);
//   res.sendStatus(200);
// });

// // Start Express Server
// app.listen(port, () => {
//   console.log(`Express server is listening on ${port}`);
// });

let subjects = localDB.level1.term1;
subjects = [...subjects, [
  {text:"عودة 🔙",callback_data:JSON.stringify({type:"back",data:{backTo:"term"}})},
  {text:"القائمة الرئيسية 🔝",callback_data:JSON.stringify({type:"back",data:{backTo:"home"}})},
]]
console.log(subjects);

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const botToken = '6902681746:AAFELtFHrXmJZ-ywamUznEp4Y1fSC-N3qwM';
const bot = new TelegramBot(botToken, { polling: true });
app.use(express.json())

app.post('/webhook', (req, res) => {
    const data = req.body; // البيانات التي تم إرسالها من الويب هوك
    // قم بكتابة منطق المعالجة هنا
    console.log("dddddddddddd");
    const response = { message: 'Webhook received successfully' };
    res.status(200).json(response);
});


// قم بتعريف معالج الأوامر الواردة للبوت
bot.on('message', (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    const message = msg.text;
    // قم بكتابة منطق معالجة الأوامر هنا
    bot.sendMessage(chatId, 'Received your message');
});

app.listen(3111, () => {
    console.log('Server is running on port 3111');
});
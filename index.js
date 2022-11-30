const { 
    Telegraf, Markup 
} = require('telegraf');
require('dotenv').config()
const text  = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(async (ctx)=> {
    
    try{
    await ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}`)
    await ctx.replyWithHTML('Что будем делать?', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Голосовалка', 'btn_5'), Markup.button.callback('Фотки Алины', 'btn_6')]
        ]
    ))
    } catch(e){
        console.error(e)
    }
 })
bot.help((ctx) => ctx.reply(text.commands));

bot.action('btn_5', async (ctx)=> {
    try{
    await ctx.replyWithHTML('Кто красивей?', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Ибра', 'btn_1'), Markup.button.callback('Алина', 'btn_2')]
        ]
    ))
    } catch(e){
        console.error(e)
    }
 })

 function addActionBot(name, src, text){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
     })
 }

 addActionBot('btn_1', './img/1.jpg', text.text1)

bot.action('btn_2', async (ctx)=> {
    try{
        await ctx.replyWithHTML('Ты уверена?', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Да', 'btn_3'), Markup.button.callback('Кажется нет', 'btn_4')]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})


function addActionBots(name, text){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
     })
 }

 addActionBots('btn_3', text.faleAlina)



 bot.action('btn_4', async (ctx)=> {
    
    try{
    await ctx.reply(`Попробуй ка еще раз Алин`)
    await ctx.replyWithHTML('Кто кто?', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Ибра', 'btn_19'), Markup.button.callback('Алина', 'btn_20')]
        ]
    ))
    } catch(e){
        console.error(e)
    }
 })

 function addActionBot(name, src, text){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
     })
 }

 addActionBot('btn_19', './img/1.jpg', text.text1)

 function addActionBots(name, text){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
     })
 }

 addActionBots('btn_20', text.faleAlina)


 addActionBot('btn_19', './img/1.jpg', text.text1)

 function galerryAlinas(name, text){
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML(text,{
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
     })
 }

 galerryAlinas('btn_6', text.galerryAlina)

 


 


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
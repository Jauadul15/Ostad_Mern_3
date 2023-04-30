//event
//const EventEmitter=require('events')

//const emitter=new EventEmitter();
// emitter.on('done', () =>{
//     console.log('we need it')
// })
// setTimeout(()=>{
// emitter.emit('done')
// },2000)
//event parameter
const EvenEmitter1=require('events')

const hi=new EvenEmitter1()
const learn=require('./start')
hi.on('haha',({sunnah,text})=>{
    console.log(`smile becuase its  ${sunnah} ${text}`)
})
// setTimeout(()=>{
//     hi.emit('haha',{
//         sunnah:'sunnah',
//         text:'hadis'
//     })
// },2000)

learn();

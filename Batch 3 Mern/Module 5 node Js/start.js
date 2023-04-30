const EventEmitter=require('events')

const hi=new EventEmitter();
function learn() {
    console.log('start from here')
    setTimeout(()=>{
        hi.emit('haha',{
            sunnah:'sunnah',
            text:'hadis'
        })
    },2000)
}
module.exports=learn;
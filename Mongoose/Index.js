let amanMon = require('mongoose')



let hh =async () => {
    await amanMon.connect('mongodb://localhost:27017/yt');
    
    let amanSch = amanMon.Schema({
        name:String,
        age:Number
    })
    
    
    let amanMod= amanMon.model('videos',amanSch);
    
    
    let amanData = amanMod({
        name:'4th Video',
        age:20
    })
    
    await amanData.save()
}
hh()


module.exports = app =>{
    app.get('/test',(req, res, next)=>{
        res.send("test hello");
    })
}
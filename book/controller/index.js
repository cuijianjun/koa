module.exports = {
    index: function*(){
        yield this.render('index',{"title":"koa demo"});
    }
    // async index (){
    // 	console.log('11111')
    // 	await this.render('index',{"title":"koa demo2"});
    // }
}
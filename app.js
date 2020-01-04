

const Koa = require('koa');

const app = new Koa();

const BasicRoute = require('./src/routes/BasicRoute');


app.proxy = true;

app.use(BasicRoute.routes()).use(BasicRoute.allowedMethods());


app.listen(3000, ()=> {
    console.log("Listening to port 3000...");
});

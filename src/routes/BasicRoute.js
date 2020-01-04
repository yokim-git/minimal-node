

const Router = require('koa-router');
const router = new Router();


module.exports = router;


router.get('/',  (ctx) => {
    ctx.set("Content-Type", "text/plain");
    ctx.status = 200;
    ctx.body = "version 0.0.0"
});

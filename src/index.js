const { makeBadge, ValidationError } = require('badge-maker')
const axios = require('axios');
const Koa = require('koa');
const Router = require('@koa/router')

const app = new Koa();
let home = new Router()

const API = 'https://api.countapi.xyz';

// 子路由1
home.get('/', async (ctx) => {
    let html = `
      <ul>
        <li><a href="/counter/helloworld">/counter/helloworld</a></li>
        <li><a href="/counter">/counter</a></li>
      </ul>
    `
    ctx.body = html
})

// counter
let counter = new Router()
counter.get('/', async (ctx) => {
    const { id, label='counter', labelColor='#555', color='#4c1', style='flat' } = ctx.request.query;
    if (!id || id.indexOf('.') < 0) {
        ctx.body = 'id not fond!';
    }
    const n = id.lastIndexOf('.');
    const c_space = id.substring(0, n - 1);
    const c_key = id.substring(n + 1);
    const response = await axios.get(`${API}/hit/jenkey2011.${c_space}/${c_key}`);
    ctx.response.set("content-type", "image/svg+xml");
    ctx.body = makeBadge({
        label,
        message: `${response.data.value}`,
        labelColor: `#${labelColor}`,
        color: `#${color}`,
        style
    });
}).get('/helloworld', async (ctx) => {
    ctx.body = 'helloworld page!'
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/counter', counter.routes(), counter.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods()).listen(3000);

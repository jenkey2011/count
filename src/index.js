require('dotenv').config();
const { makeBadge } = require('badge-maker')
const md5 = require('md5');
const axios = require('axios');
const Koa = require('koa');
const Router = require('@koa/router')

const app = new Koa();
let home = new Router()

const API = 'https://api.countapi.xyz';

// todo homepage
home.get('/', async (ctx) => {
    let html = `
    count 
    `
    ctx.body = html
})

// badge
let badge = new Router();
const secret = process.env.SECRET_KEY || 'jenkey2011'

badge.get('/', async (ctx) => {
    const { id, label='count', labelColor='555', color='4c1', style='flat' } = ctx.request.query;
    if (!id || id.indexOf('.') < 0) {
        ctx.body = 'id not fond!';
    }
    const response = await axios.get(`${API}/hit/jenkey2011/${md5(id + secret)}`);
    ctx.set("content-type", "image/svg+xml");
    ctx.set('Cache-Control', 'no-cache, max-age=0, no-store, s-maxage=0, proxy-revalidate');
    ctx.set('Pragma', 'no-cache');
    ctx.set('Expires', 0);
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
router.use('/badge', badge.routes(), badge.allowedMethods())

app.use(router.routes()).use(router.allowedMethods()).listen(3000);

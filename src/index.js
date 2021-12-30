const Koa = require('koa');
const app = new Koa();
app.keys = ['im a newer secret', 'i like turtle'];

// logger

app.use(async (ctx, next) => {
    console.log(1)
  await next();
  console.log(2)
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    console.log(3)
  const start = Date.now();
  await next();
  console.log(4)
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
    console.log(5)
  ctx.body = 'Hello World!!';
  ctx.cookies.set('name', 'tobi', { signed: true });

  console.log(6)
});


app.listen(3000);

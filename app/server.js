const express = require('express');
const next = require('next');
const path = require('path');
const devProxy = './proxy.js';

const PORT = process.env.PORT || 3000;

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  app.setAssetPrefix(process.env.STATIC_PATH);

  server.use(express.static(path.join(__dirname, '../static')));

  if (process.env.PROXY_MODE === 'local') {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }

  // server.get('/course/:course/:module', (req, res) => {
  //   const { course, module } = req.params;
  //   return app.render(req, res, '/course/module', { course, module });
  // });

  // server.get('/course/:course', (req, res) => {
  //   return app.render(req, res, '/course', { course: req.params.course });
  // });

  server.get('*', (req, res) => {
    const pathname = req.originalUrl;

    if (pathname === '/service-worker.js') {
      const filePath = path.join(__dirname, '.next', pathname);

      app.serveStatic(req, res, filePath);
    }

    return handler(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

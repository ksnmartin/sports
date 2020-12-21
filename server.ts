import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const parser = require('ua-parser-js');
// Use the browser index.html as template for the mock window
const template = fs
  .readFileSync(path.join(join(process.cwd(), 'dist/sports/browser'), 'index.html'))
  .toString();

// Shim for the global window and document objects.
const window = domino.createWindow(template);
global['window'] = window;
global['document'] = window.document;
global['self'] = window
global['IDBIndex'] = window.IDBIndex
global['document'] = window.document
global['navigator'] = window.navigator
global['getComputedStyle'] = window.getComputedStyle;

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';


function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

const mid = function mobile(req,res,next) {
   var ua = parser(req.headers['user-agent']);
   if(ua.device['type']=="mobile"){
     res.redirect("http://mobile.iitbhusports.org/")
   }
   else{
     next();
   }
 }

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/sports/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.use(compression({ filter: shouldCompress }));

  server.use(mid);
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
    const port = process.env.PORT || 80;

  // Start up the Node server
    const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
 }

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

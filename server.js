import config from './config';
import express from 'express';
const server = express();

global.apiurl = config.apiurl;


server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});
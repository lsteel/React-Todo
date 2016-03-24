'use strict';

<<<<<<< HEAD
import path from 'path';
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';

const app = express();
const PORT = config.port;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(PUBLIC_DIR));
=======
import path from 'path'
import config from 'config'
import express from 'express'
import bodyParser from 'body-parser'
import api from './routes'

const app = express()
const PORT = config.port
const PUBLIC_DIR = path.join(__dirname, 'public')

app.use(bodyParser.json())
app.use('/api', api)
app.use(express.static(PUBLIC_DIR))
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

import express from 'express';
import * as path from 'path';
import appRoot from 'app-root-path';

// Init express
const app = express();
// Deliver public files.
app.use('/', express.static('public'));

// All unhandled endpoints go to react.
app.get('/*', (req, res) => {
	res.sendFile(appRoot.resolve('public/index.html'));
});

// Start the server.
app.listen(process.env.port || 3000, () => {
	console.log('Listening!..');
});

import express from 'express';
import listEndpoints from 'express-list-endpoints';
import studentsRoutes from './students/index.js';

const server = express();
const port = 3001;

server.use('/students', studentsRoutes);
console.log(listEndpoints(server));

server.listen(3001, () => {
	console.log('server is running on port:', port);
});

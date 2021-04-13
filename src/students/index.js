/*
    Students Portfolio Repo
    You are in charge of creating a Student Portfolio Repo for both Backend and Frontend (Frontend is extra).
    In this first "step" the application should enable the creation, editing, deletion, listing of students.
    Student should have this information:
    - Name
    - Surname
    - ID
    - Email
    - Date of Birth
    //BACKEND
    
    You are in charge of building the Backend using ExpressJS. The backend should include the following routes:
    GET /students => returns the list of students
    GET /students/123 => returns a single student
    POST /students => create a new student
    PUT /students/123 => edit the student with the given id
    DELETE /students/123 => delete the student with the given id
    The persistence must be granted via file system (es.: Json file with a list of students inside)
    
    Sidenote: remember to install the cors package with 'npm i cors', to import it with the require statement
    and to use it with 'server.use(cors())'
    [EXTRA] POST /checkEmail => check if another student has the same email. The parameter should be passed in the body.
    It should return true or false.
    It should not be possible to add a new student (with POST /students) if another has the same email. 
    [EXTRA] //FRONTEND
    You are in charge of building the Frontend too. Use ReactJS to create an application for managing the students.
    The features for the application are:
    - Add a new Student ([EXTRA]use CheckEmail before sending the post to the backend)
    - Show Students on a list
    - Every Student could be edited or deleted
*/

import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const router = express.Router();

router.get('/', (req, res) => {
	const filename = fileURLToPath(import.meta.url);
	// console.log(filename);
	// console.log(dirname(filename));
	const studentsJSONPath = join(dirname(filename), 'students.json');
	console.log(studentsJSONPath);
	const fileAsBuffer = fs.readFileSync(studentsJSONPath);
	const fileAsString = fileAsBuffer.toString();
	const fileAsJSON = JSON.parse(fileAsString);
	console.log(fileAsBuffer);
	console.log(fileAsString);
	res.send(fileAsJSON);
});
router.get('/:id', (req, res) => {
	res.send({ data: 'HELLO from ' });
});
router.post('/', (req, res) => {
	res.send({ data: 'HELLO from post' });
});
router.put('/:id', (req, res) => {
	res.send({ data: 'HELLO from put' });
});
router.delete('/:id', (req, res) => {
	res.send({ data: 'HELLO from delete' });
});

export default router;

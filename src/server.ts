import  express, { request } from 'express';
import createCourseService from './createCourseService';
import { CreateCourse } from './routes';


const app = express();

app.get('/',CreateCourse )
app.listen(3333);
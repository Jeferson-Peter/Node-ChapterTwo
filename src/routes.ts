import {Request, Response} from 'express';
import createCourseService from './createCourseService';
export function CreateCourse(request:Request, response:Response) {

    createCourseService.execute({name:"nODE.JS", educator:'Dani'});
    createCourseService.execute({name:"react.JS", duration:1, educator:'Diego'});
    return response.status(200).send();
}


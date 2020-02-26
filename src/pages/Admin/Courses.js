import React , {useState, useEffect} from 'react';
import CoursesList from '../../components/Admin/Courses/CoursesList';
import {getCoursesApi} from '../../api/course';
import {getAccessTokenApi} from '../../api/auth';



export default function Courses(){
    const [courses, setCourses] = useState([]);
    const [reloadCourses, setReloadCourses] = useState(false); // para recargar la pagina de cursos si ocurre cambios

     useEffect(() => {
        getCoursesApi().then( response => {
            setCourses(response.courses);
        });
        setReloadCourses(false);
     }, [reloadCourses])
    return (
         <div className="courses">
             <CoursesList courses={courses} setReloadCourses={setReloadCourses}/>
         </div>
    )
}


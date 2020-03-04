import React from 'react';
import MainBanner from '../components/web/MainBanner';
import HomeCourses from '../components/web/HomeCourses';
import HowMyCoursesWork from '../components/web/HowMyCoursesWork';
import ReviewCourses from '../components/web/ReviewCourses';
import { Helmet } from 'react-helmet';


export default function Home(){
    return (
         <>
         <Helmet>
            <title>Pagina de citukcaamal</title>
            <meta name="description" content="web de citukcaamal" data-react-helmet="true"/>
        </Helmet>
             <MainBanner/>
             <HomeCourses/>
             <HowMyCoursesWork/> 
             <ReviewCourses/>
         </>
    )
}
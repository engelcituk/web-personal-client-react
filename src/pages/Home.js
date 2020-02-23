import React from 'react';
import MainBanner from '../components/web/MainBanner';
import HomeCourses from '../components/web/HomeCourses';
import HowMyCoursesWork from '../components/web/HowMyCoursesWork';

export default function Home(){
    return (
         <>
             <MainBanner/>
             <HomeCourses/>
             <HowMyCoursesWork/>
         </>
    )
}
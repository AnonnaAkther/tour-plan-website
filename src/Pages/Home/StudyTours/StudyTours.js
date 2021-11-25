import React from 'react';
import './StudyTours.css';
import study1 from '../../../images/study/banner-mobile.jpg';
import study2 from '../../../images/study/IIS-SCHOOL-JAIPUR-TAJ-MAHAL-AGRA.jpg';
import study3 from '../../../images/study/images.jpg';
import study4 from '../../../images/study/international-school-tour-from-india-250x250.jpg';
import study5 from '../../../images/study/Untitled-620x420@2x.png';
import StudyTour from '../StudyTour/StudyTour';

const studies = [
    {
        img: study1,
        SchoolName: '_Preparatory School_',
        Programm: 1
    },
    {
        img: study2,
        SchoolName: '_Highgate School and Academy._',
        Programm: 2
    },
    {
        img: study3,
        SchoolName: '_Wisdom Elementary School._',
        Programm: 3
    },
    {
        img: study4,
        SchoolName: '_Ideal School_',
        Programm: 4
    },
    {
        img: study5,
        SchoolName: '_Morjina Memorial School_',
        Programm: 5
    },
]

const StudyTours = () => {
    return (
        <div id="studyTour">
        <h3 className="text-primary study">Our Study Tour Programm</h3>
        {
            studies.map(study => <StudyTour
            study={study}
            ></StudyTour>)
        }
    </div>
    );
};

export default StudyTours;
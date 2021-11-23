import React from 'react';
import './StudyTour.css';

const StudyTour = ({study}) => {
    const {img, SchoolName, Programm} = study;
    return (
        <div className="col-lg-4 study">
            <img src={img} alt="" />
            <h3>{SchoolName}</h3>
            <h4 className="text-denger">{Programm}</h4>
        </div>
    );
};

export default StudyTour;
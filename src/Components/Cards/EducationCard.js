import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './CardStyles.css'

// University , School (In univ) , Major , GPA, Specialization, Graduation, Honors, Scholarship, 
// Relevant Courses
//DOing this one as internal components to see differences.
function UniversityInfo(){
    return(
        <>
            <div>
                Junior at Southern Methodist University in Dallas, TX
            </div>
            <div>
                Bobby B. Lyle School of Engineering
            </div>
            <div>
                Majors: Computer Science , Data Science
            </div>
            <div>
                Specialization: Artificial Intelligence and Machine Learning
            </div>

        </>
            

        
    )
}

const EducationCard = () => {
  return (
    <div>
      <Card className="education-card"> 

      </Card>   
    </div>
  );
        
};

export default EducationCard;


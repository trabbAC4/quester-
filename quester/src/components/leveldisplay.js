import React, {useState} from 'react';

const LevelDisplay = ({curr_level, exp_gained, exp_next}) => {
    const [level, setLevel] = useState({
        id: null,
        value: curr_level
    });
    return(
        <div classname= "level">
                <h1> This component is to display the level </h1> 
                <h1> Current level bar  [Dislay level bar]  </h1>
                <h1> Next level bar [Display how many exp points are needed next] </h1>
            </div>
        )
};

export default LevelDisplay; 

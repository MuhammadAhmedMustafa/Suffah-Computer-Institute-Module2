import React from 'react';

 const Country = (props) =>{
    const {name,imageSrc,population,noOfPorvinces} = props;

    return(
        <div className='main-flag-comp'>
            <div>{name}</div>
            <div><img src={imageSrc} alt={name} /></div>
            <div>{population}</div>
            <div>{noOfPorvinces}</div>
        </div>
    )
}

export default Country;
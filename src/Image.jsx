import React from 'react';

const Image = (props) => {

    const img = `https://source.unsplash.com/400x300/?${props.name}`
    return (
        <> 
            <div style = {{padding:"10px"}}>  
                <img src={img} alt="serached image" />
            </div>
        </>
    );
}

export default Image;
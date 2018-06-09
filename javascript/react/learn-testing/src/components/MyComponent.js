import React from 'react';

const myComponent = (props) => {
    return (
        <div className='myComp'>
            <p className='para'> This is a paragraph </p>
            <SubComponent>Subcomponents contents</SubComponent>
        </div>
    );
};


const SubComponent = (props) => {
    return (
        <div className='sub'>
            { props.children }
            <SubSubComponent>Subsub contents</SubSubComponent>
        </div>
    );
};

const SubSubComponent = (props) => {
    return (
        <div className='subsub'>
            { props.children }
        </div>
    );
};

export default myComponent;

import React from 'react';

const AboutListItem = (props) => {
    return (
        null === props.url ?
        <li className="py-1">{props.name + " - " + props.summary}</li>
        :
        <li className="py-1">
            <a className="link-light" target="_blank" rel="noreferrer"
            href={props.url}>{props.name}</a>{" - " + props.summary}</li> 
    );
};

export default AboutListItem;
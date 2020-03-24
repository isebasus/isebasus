import React, { Component, forwardRef, useRef, useImperativeHandle  } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";


const styles = {
   


};


const projectContainer = ({projectId, name, method, xRotate, yRotate}) =>  {

    return(
        <div style={{color: '-webkit-link', cursor: 'pointer'}}>
            <div className="parent">
                <div className="project" id={projectId}>
                    <div className="cover"></div>
                </div>
            </div>
            <div className="projectName">
                <h1 className="name">{name}</h1>
            </div>
        </div>
    
    )
};

const Project = injectSheet(styles)(projectContainer);

export default Project;
import React from 'react';
import { Redirect } from 'react-router-dom';

const Merch = ({ merchLocation }) =>
    window.location.href = merchLocation;
    
export default Merch;
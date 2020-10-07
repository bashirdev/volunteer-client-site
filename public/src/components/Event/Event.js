import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import EventAdded from '../Blog/EventAdded';
import Common from '../Common/Common';



const Event = () => {

   
  
    return (
        <>
    
          <EventAdded />
        
       
        </>
    );
};

export default Event;
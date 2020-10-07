import React, { useContext } from 'react';
import { UserContext } from '../../App';
import {  useHistory } from 'react-router-dom';



const Card = (props) => {
  const {imgUrl, title, _id}= props.data;
  const [taskAdded, setTaskAdded, loggedInUSer,setLoggedInUser] = useContext(UserContext);
  const history=useHistory();


const handleEvent=(_id,title,imgUrl)=>{
  setLoggedInUser({...loggedInUSer, ...taskAdded, title: title, imgUrl: imgUrl})
  history.push(`/register/${_id}`);

  
}
    return (
        <>
        
     <div className="col-md-3 col-10 mx-auto">
    <div className="card" >
  
  <img onClick={()=> handleEvent(_id, title, imgUrl)} src={imgUrl} className="card-img-top" alt=""   />
  <div className="card-body">
    <h5 className="card-title ">{title}</h5>
  
        </div>
     </div>
    </div>
  
  </>
    );
};

export default Card;

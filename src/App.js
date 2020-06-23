import React from 'react';
import data from './data.json';
import profileIcon from './account.svg';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Resume from './Resume.js';

let App=()=>{
  
  return(
    
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route  path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
  )
}
let Home=({history})=>{
  let profiles=data && data.profiles;

  const viewProfile = (e, id) => {
    e.preventDefault();
    console.log(id)
    history.push("/resume", {id})
  }
  return(
    <div className="row justify-content-center justify-space-around mt-5" style={{margin:"0%auto"}}>
    {profiles.map((value,index)=>(
      <div className="col-lg-3 col-md-4 col-sm-10 mt-1 ml-5" key={index}>
      {/* Card */}
      <div className="card" style={{boxShadow:"0px 8px 8px -8px #000"}}>
          <div className="card-body text-center">
            {/* <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/> */}
            {value.basics.gender==="male" ? <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/> : <img src={profileIcon}S alt="Profile icon" style={{width:"30%"}}/>}
            <h3> {value.basics.name} </h3>
            <h5 className="text-secondary" style={{fontStyle:"italic"}}> {value.basics.role}</h5> <hr />
<a href={"mailto:"+value.basics.email}> {value.basics.email}</a> <br>
            </br>
  <a href={"tel:"+value.basics.mobile}> {value.basics.mobile}</a> <br />
  <a href="#" onClick={(e) => viewProfile(e, index)}>view resume</a>
 {/* <a className="btn btn-secondary text-white btn-block btn-sm"> View profile</a> */}
          </div>
      </div>
    </div>
  ))}
  </div>
  )
}

export default App;


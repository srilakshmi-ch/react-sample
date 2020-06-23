import React from 'react';
import data from './data.json';
import {withRouter} from 'react-router-dom';
import prof from './account.svg';

let Resume=({location})=>{

    console.log(location)
    let info=data.profiles[location.state && location.state.id];
    return(
        <div className="row mt-5 ">
            {/*Left part*/}
            <div className="col-lg-3 offset-lg-1 bg-light justify-content-center text-center pt-5">
                <div className="card shadow">
                    <div className="card-body p-2">
                        <img src={prof} alt="#" style={{width: "100px", height: "100px"}}></img>
                        <h2>{info.basics.name}</h2>
                        <hr></hr>
                        <h3>{info.basics.role}</h3>
                        <h3>{info.basics.email}</h3>
                        <h3>{info.basics.mobile}</h3>
                        <h3>{info.basics.address}</h3>
                    </div>
                </div>
            </div>
        
        
            <div className="col-lg-7 bg-light pt-5">
                <div className="card shadow">
                    <div className="card-body p-2">
                        <img src={prof} style={{width: "100px", height: "100px"}} alt="#"></img>
                        <hr></hr>
                        <h3>Career Objective</h3>
                        <p>{info.basics.careerobjectve}</p>
                        <hr></hr>
                        <h3>Strenths</h3>
                        <ul>
                            {info.basics.Stength.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                        <hr></hr>
                        <h3>Skills</h3>
                        <ul>
                            {info.basics.skills.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                        <hr></hr>
                        <h3>Qualification</h3>
                        <table class="table table-striped table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Institute</th>
                                    <th>Course</th>
                                    <th>YOP</th>
                                    <th>Per</th>
                                </tr>
                            </thead>
                            <tbody>
                                {info.basics.Qualification.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{item.institute}</td>
                                            <td>{item.course}</td>
                                            <td>{item.yop}</td>
                                            <td>{item.per}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <hr></hr>
                        <h3>Hobbies</h3>
                        <ul>
                            {info.basics.hobbies.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>                
            </div>
            </div>
    )
}

export default withRouter(Resume);
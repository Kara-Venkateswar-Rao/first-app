import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
     <>
        <section id="sec" className="d-flex align-item-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            	            <h1>
                                {props.name}<em>VENKATESWAR</em>
                            </h1>
                            <h2 className="my-3">
                                we are the leading business team creating interactive websites
                            </h2>
                            <div className="my-4">
                                <NavLink to={props.visit} className="btn-get-strated"> {props.btname} </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home.img" />
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
     </>
    );
  };
  
  export default Common;
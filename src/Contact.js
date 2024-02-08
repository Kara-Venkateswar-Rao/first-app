import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const Contact = () => {

   // const formSubmit = () =>{
   //    const [data, setData] = useState({
   //       fullname: "",
   //       Phone: "",
   //       email: "",
   //       massage: ""
   //    });
   // }


    return (
     <>
        <div className="my-3">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
         <div className="row">
            <div className="col-mid-6 col-5 mx-auto my-5">
               <form >
               <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                     <input 
                     type="text" 
                     name="fullname"
                     // value={data.fullname}
                     // onChange={InputEvent}
                     className="form-control" 
                     id="exampleFormControlInput1" 
                     placeholder="Enter your name"/>
               </div>
               <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                     <input 
                     type="email" 
                     name="email"
                     // value={data.email}
                     // onChange={InputEvent}
                     className="form-control" 
                     id="exampleFormControlInput1" 
                     placeholder="name@example.com"/>
               </div>
               <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                     <input 
                     type="number" 
                     name="phone"
                     // value={data.Phone}
                     // onChange={InputEvent}
                     className="form-control" 
                     id="exampleFormControlInput1" 
                     placeholder="9999999999"/>
               </div>
               <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Drop a massage</label>
                  <textarea 
                   name="massage"
                  //  value={data.massage}
                  //  onChange={InputEvent}
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="2"></textarea>
               </div>
               <div className="col-12">
                  <button className="btn btn-get-strated btn-outline-primary" type="submit"> Submit </button>
               </div>

               <div className="my-4">
                  <NavLink to='/reviews' className="btn-get-strated"> For more visit reviews </NavLink>
               </div>
               </form>
            </div>
         </div>

        </div>
     </>
    );
  };
  
  export default Contact;
import React from 'react';
import {Helmet} from "react-helmet";
import "./Add.css"
import { Formik } from 'formik';
import axios from 'axios';

const Add = () => (
  <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="icon" type="image/x-icon" href="data:image/jpeg;base64,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" />

            </Helmet>
    <h1>Add To Database Form</h1>
    <Formik
      initialValues={{ name: '',img:'',about:'' }}
      onSubmit={(values, {resetForm}) => {
        if(values.name=="" || values.img=="" || values.about==""  ){
            alert("Hamisini daxil edin")
        }else{
            axios.post("http://localhost:4000/products/",values)
            .then()
        }
        resetForm()
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} id="addform" >
          <input
          placeholder='Name'
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
           <br />
          <input
          placeholder='IMG'
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.img}
            name="img"
          /> <br />
           <input
           placeholder='Information about Card'
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.about}
            name="about"
          /> <br />
          
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </>
);
export default Add
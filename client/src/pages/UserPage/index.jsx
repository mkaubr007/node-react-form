import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.css";
import axios from "axios";
import Endpoints from "../../api/Endpoints"

const UserForm = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClassName: "",
  });
  const initialValues = {
    name: "",
    dob: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    dob: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios
    .post(Endpoints.USER_URL, values)
    .then(
      (response) => {
        console.log(response);
        setRequestResponse({
          textMessage: "user save, thank you",
          alertClassName: "alert alert-success",
        });
      },
      (error) => {
        console.log(error);
        setRequestResponse({
          textMessage: error.response.data.message,
          alertClassName: "alert alert-danger",
        });
      },
      navigate("/dashboard")
    )
    .catch((error) => console.log(error));
};
    

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
          <div class={requestResponse.alertClassName} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>User Form</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div>
                  <label htmlFor="dob">Date of Birth</label>
                  <Field type="date" id="dob" name="dob" />
                  <ErrorMessage name="dob" component="div" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Field type="text" id="phoneNumber" name="phoneNumber" />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>                
                <button type="submit">Submit</button> 
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

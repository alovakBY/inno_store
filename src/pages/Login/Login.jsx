import React, { useEffect } from "react";
import { ErrorMessage, Field, Formik } from "formik";

import { useNavigate } from "react-router-dom";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { ROUTE_NAMES } from "../../constants";
import { validationSchema } from "./validationSchema";
import { authPageSelector } from "./selectors";
import { fetchAuthThunk } from "./thunks";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
   const dispatch = useDispatch();
   const { isLoading, errors, isAuth } = useSelector(authPageSelector);

   const navigate = useNavigate();

   useEffect(() => {
      if (isAuth) {
         navigate(ROUTE_NAMES.PRODUCTS);
      }
   }, [isAuth, navigate]);

   const initialValues = {
      email: "",
      password: "",
   };

   const handleSubmit = (values) => {
      dispatch(fetchAuthThunk(values));
   };

   return (
      <div>
         <Modal show={true}>
            <Modal.Header className="justify-content-center">
               <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
               <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
               >
                  {(props) => {
                     return (
                        <form onSubmit={props.handleSubmit}>
                           <Form.Group controlId="formFileSm" className="mb-3">
                              <Form.Label>Email</Form.Label>

                              <Field
                                 type="email"
                                 name="email"
                                 placeholder="Enter email"
                                 component={MyInput}
                              />

                              <ErrorMessage name="email">
                                 {(message) => (
                                    <div className="error-message">
                                       {message}
                                    </div>
                                 )}
                              </ErrorMessage>
                           </Form.Group>

                           <Form.Group controlId="formFileSm" className="mb-3">
                              <Form.Label>Password</Form.Label>

                              <Field
                                 type="password"
                                 name="password"
                                 placeholder="Enter password"
                                 component={MyInput}
                              />

                              <ErrorMessage name="password">
                                 {(message) => (
                                    <div className="error-message">
                                       {message}
                                    </div>
                                 )}
                              </ErrorMessage>
                           </Form.Group>

                           {!!errors && (
                              <div className="error-message mb-2">{errors}</div>
                           )}

                           <Button
                              variant="primary"
                              type="submit"
                              disabled={!props.isValid || isLoading}
                           >
                              {isLoading ? (
                                 <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                       Loading...
                                    </span>
                                 </Spinner>
                              ) : (
                                 "Войти"
                              )}
                           </Button>
                        </form>
                     );
                  }}
               </Formik>
            </Modal.Body>
         </Modal>
      </div>
   );
};

function MyInput({ field, ...props }) {
   return <Form.Control {...field} {...props} />;
}

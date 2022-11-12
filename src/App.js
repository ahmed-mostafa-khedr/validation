import "./App.css";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  ButtonGroup,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <>
      <Card>
        <CardContent>
          <Formik
            initialValues={{ name: "", age: 18, description: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Enter Your Name"),
              age: Yup.number()
                .min(18, "Must be 18 characters or more")
                .required("Required"),
              description: Yup.string().min(
                5,
                "Can't be less than 5 characters"
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Steps isSubmitting={isSubmitting}>
                  <Field
                    label="NAME"
                    type="text"
                    name="name"
                    id="name"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter Your Name"
                    component={TextField}
                    error={errors.name ? true : false}
                    helperText={errors.name}
                  />

                  <Field
                    type="number"
                    name="age"
                    id="age"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    component={TextField}
                    error={errors.age ? true : false}
                    helperText={errors.age}
                  />

                  <Field
                    label="Description"
                    type="text"
                    name="description"
                    id="description"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder="OPTIONAL"
                    component={TextField}
                    error={errors.description ? true : false}
                    helperText={errors.description}
                  />
                </Steps>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
}

const Steps = (props) => {
  const childrenArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(0);

  return (
    <>
      {childrenArr[step]}
      <ButtonGroup disableElevation variant="contained" color="inherit">
        {step > 0 && (
          <Button
            onClick={() => setStep(step - 1)}
            variant="contained"
            color="warning"
          >
            {`< Back`}
          </Button>
        )}
        {step < 2 && (
          <Button
            type="submit"
            onClick={() => setStep(step + 1)}
            variant="contained"
           >
            {`Next >`}
          </Button>
        )}
        {step === childrenArr.length - 1 && (
          <Button
            type="submit"
            variant="contained"
            disabled={props.isSubmitting}
            color="primary"
          >
            Submit
          </Button>
        )}
      </ButtonGroup>
    </>
  );
};

export default App;

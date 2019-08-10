import React from "react";
import { Formik, Form, Field } from "formik";

import LocationPicker from "../components/LocationPicker";
import CustomTextField from "../components/FormikComponents/CustomTextField";
import CustomDateInput from "../components/FormikComponents/CustomDateInput";
import CustomTimeImput from "../components/FormikComponents/CustomTimeInput";
import CustomTextarea from "../components/FormikComponents/CustomTextarea";
import CustomSelect from "../components/FormikComponents/CustomSelect";

const CreateEditEvent = ({}) => {
  return (
    <div>
      <h1>Create your Event</h1>
      <Formik
        initialValues={{
          name: "",
          date: null,
          time: null,
          description: "",
          country: "",
          city: "",
          address: "",
          coordinates: []
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field name="name" component={CustomTextField} label="Name" />
            <Field name="date" label="Date" component={CustomDateInput} />
            <Field name="time" label="Time" component={CustomTimeImput} />
            <Field
              name="description"
              component={CustomTextarea}
              label="Description"
            />
            <Field
              name="country"
              label="Country"
              component={CustomSelect}
              options={[
                {
                  value: "Thailand",
                  label: "Thailand"
                },
                {
                  value: "Myanmar",
                  label: "Myanmar"
                },
                {
                  value: "Korea",
                  label: "Korea"
                }
              ]}
            />
            <Field name="city" component={CustomTextField} label="City" />
            <Field name="address" component={CustomTextField} label="Address" />
            <LocationPicker setFieldValue={setFieldValue} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEditEvent;

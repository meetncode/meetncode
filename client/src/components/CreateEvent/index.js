import React from "react";
import { withRouter } from 'react-router-dom';
import { Mutation } from "react-apollo";
import { Formik, Form, Field } from "formik";

import MUTATION_CREATE_EVENT from "./mutationCreateEvent.graphql";

import LocationPicker from "../LocationPicker";
import CustomTextField from "../FormikComponents/CustomTextField";
import CustomDateInput from "../FormikComponents/CustomDateInput";
import CustomTimeImput from "../FormikComponents/CustomTimeInput";
import CustomTextarea from "../FormikComponents/CustomTextarea";
import CustomSelect from "../FormikComponents/CustomSelect";
import CustomLocationPicker from "../FormikComponents/CustomLocationPicker";

const CreateEditEvent = ({}) => {
  return (
    <Mutation mutation={MUTATION_CREATE_EVENT}>
      {(createEvent, { loading }) => (
        <div>
          <h1>Create your Event</h1>
          <Formik
            initialValues={{
              name: "",
              date: null,
              // time: null,
              description: "",
              location: {
                country: "",
                city: "",
                address: "",
                locationCoordinates: {
                  type: "Point",
                  coordinates: []
                }
              }
            }}
            onSubmit={async (values, { resetForm }) => {
              await createEvent({
                variables: {
                  input: {
                    ...values,
                    host: "5d2898c9dd591c35a4b3a4e9",
                    group: "5d052ee1c5ac64718e2c2803"
                  }
                }
              });
              resetForm()
            }}
          >
            {() => (
              <Form>
                <Field name="name" component={CustomTextField} label="Name" />
                <Field name="date" label="Date" component={CustomDateInput} />
                {/* <Field name="time" label="Time" component={CustomTimeImput} /> */}
                <Field
                  name="description"
                  component={CustomTextarea}
                  label="Description"
                />
                <Field
                  name="location.country"
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
                <Field name="location.city" component={CustomTextField} label="City" />
                <Field
                  name="location.address"
                  component={CustomTextField}
                  label="Address"
                />
                <Field name="location.locationCoordinates.coordinates" component={CustomLocationPicker} />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </Mutation>
  );
};

export default CreateEditEvent;

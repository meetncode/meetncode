import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { Formik, Form, Field } from "formik";

import MUTATION_CREATE_EVENT from "./mutationCreateEvent.graphql";
import CurrentUser from "../CurrentUser";

import CustomTextField from "../FormikComponents/CustomTextField";
import CustomDateTimePicker from "../FormikComponents/CustomDateTimePicker";
import CustomTextarea from "../FormikComponents/CustomTextarea";
import CustomSelect from "../FormikComponents/CustomSelect";
import CustomLocationPicker from "../FormikComponents/CustomLocationPicker";


const CreateEditEvent = ({ match }) => {
  return (
    <Mutation mutation={MUTATION_CREATE_EVENT}>
      {(createEvent, { loading }) => (
        <div>
          <h1>Create your Event</h1>
          <CurrentUser>
            {({ user }) => (
              <Formik
                initialValues={{
                  name: "",
                  date: null,
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
                        group: match.params.groupid,
                        host: user.id
                      }
                    }
                  });
                  resetForm();
                }}
              >
                {() => (
                  <Form>
                    <Field
                      name="name"
                      component={CustomTextField}
                      label="Name"
                    />
                    <Field
                      name="date"
                      label="Date"
                      component={CustomDateTimePicker}
                      autoOk
                      disablePast
                    />
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
                    <Field
                      name="location.city"
                      component={CustomTextField}
                      label="City"
                    />
                    <Field
                      name="location.address"
                      component={CustomTextField}
                      label="Address"
                    />
                    <Field
                      name="location.locationCoordinates.coordinates"
                      component={CustomLocationPicker}
                    />
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            )}
          </CurrentUser>
        </div>
      )}
    </Mutation>
  );
};

export default withRouter(CreateEditEvent);

import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { Formik, Form, Field } from "formik";
import './CreateGroup.css'
import MUTATION_CREATE_GROUP from "./createGroupMutation.graphql";
import CurrentUser from "../CurrentUser";

import CustomTextField from "../FormikComponents/CustomTextField";
import CustomDateTimePicker from "../FormikComponents/CustomDateTimePicker";
import CustomTextarea from "../FormikComponents/CustomTextarea";
import CustomSelect from "../FormikComponents/CustomSelect";
import CustomLocationPicker from "../FormikComponents/CustomLocationPicker";

import imageUploader from "../../helpers/imageUploader";

class CreateGroup extends React.Component {
  constructor(props) {
		super(props);
		this.fileInput = React.createRef();

  }
  render(){
  const { history } = this.props;
  return (
    <Mutation mutation={MUTATION_CREATE_GROUP}>
      {(createGroup, { loading }) => (
        <div>
          <h1>Create your own Group</h1>
          <CurrentUser>
            {({ user }) => (
              <Formik
                initialValues={{
                  name: "",
									private: false,
									enabled: true,
                  description: "",
                  picture: "",
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
                handleImageUpload={async() => {
                  const result = await imageUploader(this.fileInput.current.files[0])
                  await setFieldValue('picture', result.url)
                }}
                onSubmit={async (values) => {
                  // await this.handleImageUpload()
									// if(result){
                    const response = await createGroup({
                      variables: {
                        input: {
                          ...values,
                          admin: user.id
                        }
                      }
                    });
                    if(response){
                      history.push(`/group/${response.data.createGroup.id}`)
                    }
                  // }
                }}
              >
                {() => (
                  <Form className="create-group-form">
                    <Field
                      name="name"
                      component={CustomTextField}
                      label="Name"
                    />
                    <Field
                      name="description"
                      component={CustomTextarea}
                      label="Description"
                      className="create-group-form__description"
                    />
										{/* <Field
                      name="category.name"
                      component={CustomTextField}
                      label="Category"
                    /> */}
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
                      className="create-group-form__map"
                    />
                    <input 
												type="file" 
												ref={this.fileInput} 
												onChange={async () => {
                          const result = await imageUploader(this.fileInput.current.files[0])
                          setFieldValue('picture', result.url)
                          }
                          } 
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
  }
};

export default withRouter(CreateGroup);

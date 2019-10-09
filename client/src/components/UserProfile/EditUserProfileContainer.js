import React from 'react'
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CurrentUser from "../CurrentUser";
import CustomTextField from "../FormikComponents/CustomTextField";
import CustomDateInput from "../FormikComponents/CustomDateInput";
import CustomTextarea from "../FormikComponents/CustomTextarea";
import "./UserProfile.css"
import imageUploader from "../../helpers/imageUploader";
import EDIT_USER_MUTATION from "./editUserMutation.graphql";

const styles = theme => ({
  button: {
    background: "linear-gradient(to left, #f27954, #a154f2)",
    padding: "0.5em 3em",
    margin: "1em",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    color: "#fff",
    cursor: "pointer"
  }
});

class EditUserProfileContainer extends React.Component{
	constructor(props) {
		super(props);
		this.fileInput = React.createRef();

	}

	render(){
	const { classes } = this.props;

		return (
			<Mutation mutation={EDIT_USER_MUTATION}>
				{(updateUser) => (
					<div>
						<div className="header-panel">
							<h3 className="page-title">Edit your account</h3>
							<button onClick={this.props.history.goBack}>Back</button>
						</div>
						<CurrentUser>
							{({ user }) => (
								<Formik
									initialValues={{
										firstName: user.firstName,
										lastName: user.lastName,
										birthday: user.birthday,
										bio: user.bio,
										birthday: user.birthday,
										picture: user.picture
									}}
									onSubmit={async (values, { resetForm }) => {
										const birthday = values.birthday.$d
										await updateUser({
											variables: {
												id: user.id,
												input: {
													birthday: `${birthday}`,
													...values
												}
											}
										});
										resetForm();
									}}
								>
									{({ values, setFieldValue }) => (
										<Form className="edit-user-form">
											<Field
												name="firstName"
												component={CustomTextField}
												label="firstName"
											/>
											<Field
												name="lastName"
												component={CustomTextField}
												label="lastName"
											/>
											<Field
												name="birthday"
												label="birthday"
												component={CustomDateInput}
												autoOk
											/>
											<Field
												name="bio"
												component={CustomTextarea}
												label="bio"
												placeholder="Write something about yourself"
												className="edit-user-profile__bio"
											/>
											{
												values.picture ?
												<div className="profile edit-profile-picture">
													<img src={values.picture} alt="" className="profile-picture"/>
													<input 
														type="file" 
														ref={this.fileInput} 
														onChange={async () => {
															const result = await imageUploader(this.fileInput.current.files[0])
															setFieldValue('picture', result.url)
															}
															} />
												</div>
												:
												(
												<input 
												type="file" 
												ref={this.fileInput} 
												onChange={async () => {
													const result = await imageUploader(this.fileInput.current.files[0])
													setFieldValue('picture', result.url)
													}
													} />
												)
											}
											<Button type="submit" variant="contained" className={classes.button}>
                      Submit
                    </Button>
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
	};
	
export default withRouter(withStyles(styles)(EditUserProfileContainer));

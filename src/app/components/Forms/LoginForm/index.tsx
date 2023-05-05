
"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import AuthService from "../../../../../lib/auth.service";
import HttpService from "../../../../../lib/http.services";
import { setFormikErrors } from "../../../../../lib/utils.service";
import { FormElement } from "../../commons/FormElement";

// Typescript Interface
interface IValues {
  email: string;
  password: string;
}



// Submit
const onFormSubmit = async (
  values: IValues,
  { setSubmitting, resetForm, setFieldError }: FormikHelpers<IValues>
) => {
  const postData = {
    email: values.email,
    password: values.password,
    device_name: "web",
  };

  try {
    const resp = await HttpService.post("login", postData);
    if (resp.status === 200) {
      let data = resp.data.data;
      if (typeof data.token != 'undefined') {
        AuthService.saveAuthToken(data.token, data.user.name);
        // resetForm();
        // let currentLocation = window.origin;   // get url of current page
        // window.location.href = currentLocation // reload
      }
      else {
        let error = { email: ["Username and Password do not match"] };
        setFormikErrors(error, setFieldError);
      }
    }
  }
  catch (error: any) {
    if (error.response.status === 422) {
      setFormikErrors(error.response.data.errors, setFieldError);
    }
  }
};

// Main function
export const LoginForm = () => {
  const initialValues: IValues = {
    email: "",
    password: "",
  };


  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div className="grid grid-flow-row auto-rows-max -mt-3">
              <h2 className="mx-auto text-3xl mb-2"> Log in</h2>
            </div>
            <FormElement
              name="email"
              label="Email Address"
              errors={errors}
              touched={touched}
            >
              <Field
                id="email"
                name="email"
                placeholder="Enter the email"
                className="w-full p-4 pr-12 text-sm border border-gray-100 rounded-lg shadow-sm focus:border-sky-500"
              />
            </FormElement>

            <FormElement
              name="password"
              label="Password"
              errors={errors}
              touched={touched}
            >
              <Field
                id="password"
                name="password"
                placeholder="Enter the password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                type="password"
              />
            </FormElement>
            <div className="grid grid-flow-row auto-rows-max mt-5">
              <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg focus:scale-90 shadow-sm mx-auto">
                Sign Up
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </>
  );
};



import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {

    const ContactSchema = Yup.object().shape({

        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        message: Yup.string(),

    });

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                <Form className="mt-3 mb-2">
                    <div className="mb-1 flex flex-col gap-6">
                        <h6 variant="h6" color="blue-gray" className="-mb-4">
                            Your Name
                        </h6>
                        <input
                            type="text"
                            name="name"
                            size="lg"
                            placeholder="name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <h6 variant="h6" color="blue-gray" className="-mb-4">
                            Your Email
                        </h6>
                        <Field type="email" name="email" placeholder="Email">
                            {({
                                field,
                                meta,
                            }) => (
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }} {...field} />
                                    {meta.touched && meta.error && (
                                        <div className="error">{meta.error}</div>
                                    )}
                                </div>
                            )}

                        </Field>
                        <h6 variant="h6" color="blue-gray" className="-mb-4">
                            Your Message
                        </h6>
                        <Field type="email" name="email" placeholder="Email">
                            {({
                                field,
                                meta,
                            }) => (
                                <div>
                                    <textarea
                                        type="textarea"
                                        name="message"
                                        size="lg"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }} {...field}
                                    />
                                    {meta.touched && meta.error && (
                                        <div className="error">{meta.error}</div>
                                    )}
                                </div>)}
                        </Field>
                    </div>
                    <button className="mt-6" fullWidth>
                        Send Message
                    </button>
                </Form>
            </Formik>
        </>

    );
}
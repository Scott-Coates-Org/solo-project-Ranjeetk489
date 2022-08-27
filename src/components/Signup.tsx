import { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";


const Signup: NextPage = () => {
    return (
        <>
            <div>
                <div className="wrapper shadow-lg w-fit mx-auto mt-[15vh] px-6 py-10">
                    <span className="text-2xl ml-3">Sign up</span>
                    <div className="p-3 mb-3 mt-4">
                        <InputForm />
                    </div>
                    <button className="flex justify-center items-center border border-gray-700 px-4 py-2 mb-6 mt-4 w-[22rem] ml-3 "><FcGoogle className="mr-3" /> Continue with Google</button>
                    <span className="text-slate-500 ml-3"> Already a member? <Link href="/auth/signin" ><span className="cursor-pointer text-btnPrimary underline"> Sign in</span></Link></span>
                </div>
            </div>
        </>
    )
}

const InputForm: NextPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'password length must be greater than 8').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-[22rem]">
                <div className="flex justify-between w-[22rem]">
                    <div className="form-wrapper flex flex-col">
                        <input
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="First Name"
                            className={formik.touched.firstName && formik.errors.firstName ? "w-[10rem]" : "mb-3 w-[10rem]"}

                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 mt-1 mb-3">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="form-wrapper flex flex-col ">
                        <input
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            placeholder="Last Name"
                            className={formik.touched.lastName && formik.errors.lastName ? "w-[10rem]" : "mb-3 w-[10rem]"}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 mt-1 mb-3">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                </div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email Address"
                    className={formik.touched.email && formik.errors.email ? "" : "mb-3"}

                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 mt-1 mb-3">{formik.errors.email}</div>
                ) : null}

                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Create Password"
                    className={formik.touched.password && formik.errors.password ? "" : "mb-7"}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 mt-1 mb-7">{formik.errors.password}</div>
                ) : null}

                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </>
    )
}


export default Signup
import Image from "next/image"
import React from 'react';
import { BsFillShieldLockFill } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc';
import { Formik, validateYupSchema, useFormik } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import { NextPage } from "next";
import { getProviders, useSession } from "next-auth/react";
import { DiGithubBadge } from 'react-icons/di';





const Signin = (props) => {
    const { signIn, providers } = props;

    return (
        <>
            <div className="md:mt-[15vh] flex flex-col items-center" >
                <div className="form flex flex-col justify-center items-center px-8 py-12 shadow-lg mx-auto w-[25rem] ">
                    <div className="overlay w-12 h-12 border-radius bg-btnPrimary relative rounded-full">
                        <BsFillShieldLockFill size={26} className="text-white absolute top-3 left-[11px]" />
                    </div>
                    <h3 className="mx-4 mt-2">Hey, welcome back !!!</h3>
                    <button className="flex justify-center items-center border border-gray-700 px-4 py-2 mb-2 mt-6 w-full" onClick={() => signIn(providers.google.id)}><FcGoogle className="mr-3" /> Continue with Google</button>
                    <button className="flex justify-center items-center border border-gray-700 px-4 py-2 mb-6 mt-1 w-full" onClick={() => signIn(providers.github.id)}><DiGithubBadge className="mr-3" /> Continue with GitHub</button>
                    <SigninForm signIn={signIn} />
                </div>
                <div className="flex wrap justify-between items-center  w-[25rem] p-2 mt-2">
                    <span className="text-btnPrimary font-semibold">Forgot Password?</span>
                    <span className="text-slate-500">Don't have an account? <Link href="/auth/signup" ><span className="text-btnPrimary"> Sign Up</span></Link></span>
                </div>
            </div>
        </>
    )
}

const SigninForm: NextPage = ({ signIn }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'password length must be greater than 8').required('Required'),
        }),
        onSubmit: values => {
            signIn("credentials", values)
        },

    });



    return (
        <>
            <form onSubmit={formik.handleSubmit} className="flex flex-col">
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email Address"
                    className={formik.touched.email && formik.errors.email ? "" : "mb-4"}

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
                    placeholder="Password"
                    className={formik.touched.password && formik.errors.password ? "" : "mb-7"}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 mt-1 mb-5">{formik.errors.password}</div>
                ) : null}

                <button type="submit" className="submit-btn">Sign In</button>
            </form>
        </>
    )
}


export default Signin;



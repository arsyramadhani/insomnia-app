import React, { useEffect, useState } from "react";
import Form from "../../components/common/Form";
import FormControl from "../../components/common/FormControl";
import InputLabel from "../../components/common/InputLabel";
import AuthLayout from "../../components/Layout/AuthLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/common/Input";
import FormErrorMessage from "../../components/common/FormErrorMessage";
import Button from "../../components/common/Button";
import Link from "next/link";
import supabase from "../../services/supabaseClient";
import { useRouter } from "next/router";
import AuthSuccess from "../../components/parts/AuthSuccess";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(5).max(100),
      password: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Password harus sama"),
    }),
    onSubmit: async (values) => {
      setIsloading(true);
      const { user, session, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      error && setIsloading(false);

      session && setIsloading(false);
      session && setIsSuccess(true);
      session &&
        setTimeout(() => {
          router.push("/collections");
        }, 5000);
    },
  });

  return (
    <>
      <div className="w-full  ">
        <h3 className="mb-1 text-2xl font-bold">Welcome to Insomnia,</h3>
        <h3 className="text-sm font-medium text-slate-500">
          Buat undanganmu sendiri
        </h3>
      </div>
      <div className="h-8"></div>
      {isSuccess ? (
        <AuthSuccess message="Sign up berhasil" />
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="text"
              placeholder="email"
              error={formik.touched.email && formik.errors.email && true}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessage message={formik.errors.email} />
            )}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              error={formik.touched.password && formik.errors.password && true}
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessage message={formik.errors.password} />
            )}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="repassword">Confirm Password</InputLabel>
            <Input
              id="repassword"
              type="password"
              error={
                formik.touched.repassword && formik.errors.repassword && true
              }
              placeholder="password confirmation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repassword}
            />
            {formik.touched.repassword && formik.errors.repassword && (
              <FormErrorMessage message={formik.errors.repassword} />
            )}
          </FormControl>
          <Button isLoading={isLoading} variant="block">
            Login
          </Button>
          <Link href="/auth/login">
            <a className="text-sm">Already have an account? Sign in instead</a>
          </Link>
        </Form>
      )}
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

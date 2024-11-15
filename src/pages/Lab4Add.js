import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../data/AppContext";

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length > 30) {
    errors.name = "Name must be less than 30 characters";
  }

  if (!values.year) {
    errors.year = "Year is required";
  } else if (!/^\d{4}$/.test(values.year)) {
    errors.year = "Year must be exactly 4 digits";
  }
  if (!values.registrationNumber) {
    errors.registrationNumber = "Registration number is required";
  } else if (values.registrationNumber.length > 9) {
    errors.registrationNumber = "Registration number must be max 9 characters";
  }
  if (!values.rating) {
    errors.rating = "Rating is required";
  } else if (isNaN(values.rating) || values.rating < 0 || values.rating > 10) {
    errors.rating = "Rating must be a number between 0 and 10";
  }

  return errors;
};

const SignupForm = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const { dispatch } = context;

  const formik = useFormik({
    initialValues: {
      name: "",
      year: "",
      registrationNumber: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      const numericRating = parseFloat(values.rating);
      const numericYear = parseInt(values.year);

      const newCar = {
        type: "add",
        payload: {
          name: values.name,
          year: numericYear,
          registrationNumber: values.registrationNumber,
          rating: numericRating,
        },
      };

      dispatch(newCar);
      navigate("/lab4", { replace: true });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="px-4">
      {/* <div className="text-danger">
        {Object.values(errors).map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div> */}
      <h1>Add New Car</h1>

      <div className="mb-3">
        <label htmlFor="name">Car Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-control ${
            formik.errors.name && formik.touched.name ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="invalid-feedback">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="year">Year of Production</label>
        <input
          id="year"
          name="year"
          type="text"
          className={`form-control ${
            formik.errors.year && formik.touched.year ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        {formik.errors.year && formik.touched.year ? (
          <div className="invalid-feedback">{formik.errors.year}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="registrationNumber">Registration Number</label>
        <input
          id="registrationNumber"
          name="registrationNumber"
          type="text"
          className={`form-control ${
            formik.errors.registrationNumber &&
            formik.touched.registrationNumber
              ? "is-invalid"
              : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.registrationNumber}
        />
        {formik.errors.registrationNumber &&
        formik.touched.registrationNumber ? (
          <div className="invalid-feedback">
            {formik.errors.registrationNumber}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          className={`form-control ${
            formik.errors.rating && formik.touched.rating ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        {formik.errors.rating && formik.touched.rating ? (
          <div className="invalid-feedback">{formik.errors.rating}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Add Car
      </button>
    </form>
  );
};

export default SignupForm;

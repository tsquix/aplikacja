import { useParams } from "react-router-dom";
import AppContext from "../data/AppContext";
import { useContext, useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Lab4Edit() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const { items } = context;
  const dispatch = context.dispatch;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    year: "",
    registrationNumber: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const car = items.find((car) => parseInt(car.id) === parseInt(id));
    if (car) {
      setFormData({
        name: car.name,
        year: car.year,
        registrationNumber: car.registrationNumber,
        rating: car.rating,
      });
    }
  }, [id, items]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validateForm() {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 30) {
      newErrors.name = "Name must be less than 30 characters";
    }

    // Year validation
    if (!formData.year) {
      newErrors.year = "Year is required";
    } else if (!/^\d{4}$/.test(formData.year)) {
      newErrors.year = "Year must be exactly 4 digits";
    }

    // Registration number validation
    if (!formData.registrationNumber) {
      newErrors.registrationNumber = "Registration number is required";
    } else if (formData.registrationNumber.length > 9) {
      newErrors.registrationNumber =
        "Registration number must be max 9 characters";
    }

    // Rating validation
    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    } else if (
      isNaN(formData.rating) ||
      formData.rating < 0 ||
      formData.rating > 10
    ) {
      newErrors.rating = "Rating must be a number between 0 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function onSubmitFunction(e) {
    e.preventDefault();
    if (validateForm()) {
      dispatch({
        type: "edit",
        id: parseInt(id),
        name: formData.name,
        year: formData.year,
        registrationNumber: formData.registrationNumber,
        rating: formData.rating,
      });
      navigate("/lab4");
    }
  }

  return (
    <div>
      {items.map((car) => {
        if (parseInt(id) === parseInt(car.id)) {
          return (
            <>
              <div className="text-danger">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
              <div className="px-4">
                <h1>Edit {car.name}</h1>

                <Form className="text-primary" onSubmit={onSubmitFunction}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Edit name</Form.Label>
                    <FormControl
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`text-lg ${errors.name ? "is-invalid" : ""}`}
                      placeholder={car.name}
                    />
                    {errors.name && (
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    )}
                    <Form.Text className="text-muted">
                      Input valid name
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Year of production</Form.Label>
                    <FormControl
                      required
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder={car.year}
                    />
                    <Form.Text className="text-muted">
                      Input mininum 4 characters, only digit
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="registrationNumber">
                      Registration number
                    </Form.Label>
                    <FormControl
                      required
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder={car.registrationNumber}
                    />
                    <Form.Text className="text-muted">
                      Enter registration number max chars 9 (including 1 space)
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="rating">Rating</Form.Label>
                    <FormControl
                      required
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      placeholder={car.rating}
                    />
                    <Form.Text className="text-muted">
                      Enter rating (number within 0 - 10 range)
                    </Form.Text>
                  </Form.Group>

                  <div className="d-grid">
                    <Button type="submit" variant="outline-primary" size="lg">
                      Edit car data
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          );
        }
        return null;
      })}
    </div>
  );
}

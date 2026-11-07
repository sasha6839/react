import { useState } from "react";

function ValidationForm() {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    return (
        <div className="form-wrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                let newErrors = { email: "", password: "" };
                if (!formData.email.includes("@")) {
                    newErrors.email = "Email must contain @";
                }
                if (formData.password.length < 6) {
                    newErrors.password = "Password must be at least 6 characters long";
                }
                setErrors(newErrors);
                console.log("Form submitted", formData, errors);
            }}>
                <h2>Базова валідація при відправці</h2>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                </div>
                <button type="submit">Надіслати</button>
                
            </form>
        </div>
    )

}

export default ValidationForm;
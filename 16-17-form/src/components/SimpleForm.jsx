import { useState } from "react";

function SimpleForm() {

    const [formData, setFormData] = useState({
        name: "",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        

        console.log("Form submitted", formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h2>Збір даних користувача</h2>
                <label>
                    Ім'я: <input type="text" name="name"
                        value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Вік: <input type="number" name="age"
                        value={formData.age} onChange={handleChange} />
                </label>
                <button type="submit">Надіслати</button>
            </form>
        </div>
    )
}

export default SimpleForm;
import React, { useState } from 'react'
import './RegistrationPage.css'
import { Link } from 'react-router-dom'

function RegistrationPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showEmailField, setShowEmailField] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Дякуємо за реєстрацію, ${name}`)
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        const age = event.target.value;
        setAge(age);

        const showEmail = parseInt(age, 10) >= 18;
        setShowEmailField(showEmail);
    };

    return (
        <div className="page-container">
            <h1>Реєстрація</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Ім'я:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Вік:
                        <input
                            type="number"
                            value={age}
                            onChange={handleAgeChange}
                            required
                        />
                    </label>
                </div>
                {showEmailField && (
                    <div className="form-group">
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!name || !age || (showEmailField && !email)}
                    >
                    Зареєструватися
                </button>
            </form>

            <div className="">
                <Link to="/">На головну</Link>
            </div>
        </div>
    )
}

export default RegistrationPage
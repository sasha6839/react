import {useState, useId} from 'react'

function OrderForm() {

    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Дані форми", formData);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({...prev, [name]: type === 'checkbox' ? checked : value}));
    }

    const [formData, setFormData] = useState({
        name: "",
        foodType: "pizza",
        deliveryMethod: "pickup",
        extraCheese: false,
        sauce: "tomato",
    });

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <label>
                    Ім'я: <input type="text" name="name"
                        value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Тип їжі:
                    <select name="foodType" value={formData.foodType} onChange={handleChange}>
                        <option value="pizza">Піца</option>
                        <option value="burger">Бургер</option>
                        <option value="sushi">Суші</option>
                    </select>
                </label>
                <label style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                        Метод доставки:
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="radio" name="deliveryMethod" value="pickup"
                            checked={formData.deliveryMethod === "pickup"} onChange={handleChange} /> Самовивіз
                        <input type="radio" name="deliveryMethod" value="delivery"
                            checked={formData.deliveryMethod === "delivery"} onChange={handleChange} /> Доставка
                    </div>
                </label>
                <label>
                    <div>
                        Додатковий сир:
                        <input type="checkbox" name="extraCheese"
                            checked={formData.extraCheese} onChange={handleChange} />
                    </div>
                </label>
                <label>
                    {formData.foodType === 'pizza' && (
                        <div>
                            Cоус:
                            <select name="sauce" value={formData.sauce} onChange={handleChange}>
                                <option value="tomato">Томатний</option>
                                <option value="garlic">Часниковий</option>
                                <option value="spicy">Гострий</option>
                            </select>
                        </div>
                    )}


                </label>
                <button type="submit">Надіслати</button>

            </form>
        </div>
    )

}

export default OrderForm
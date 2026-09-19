import React from "react";

function WelcomeMessage(){
    const name = "Sasha"
    const lastName = "TV"

    return (
        <div>
            <h2>Ласкаво просимо!</h2>
            <p>Користувач: {name} {lastName}</p>
        </div>
    );
}

export default WelcomeMessage;
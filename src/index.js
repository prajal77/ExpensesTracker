import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


const App = () => {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

const Header = () => {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
    // return <h1 style={style} className="header">Fast React Pizza Co.</h1>
    return <header className="header"><h1 >Fast React Pizza Co.</h1></header>



};

const Menu = () => {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return <main className="menu">
        <h2>Our menu</h2>
        {
            numPizzas > 0 && (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name}
                    />)}
                </ul>
            )
        }

        {/* <Pizza name="Pizza Spinaci" 
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            img="pizzas/spinaci.jpg"
            price={12} />
        <Pizza name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            img="pizzas/spinaci.jpg"
            price={12} /> */}
    </main>
};

const Pizza = (props) => {
    return <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price + 3}</span>
        </div>
    </li>

}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    return <footer className="footer">
        {/* Conditional Rendering using short circuting( if we have some true or some truthy value such as first
         value(isOpen) is true the secound value will be retured in case that condition is true   )
         */}
        {
            isOpen && (
                <div className="order">
                    <p>We're open until {closeHour}:00. Order Here!!</p>
                    <button className="btn">Order</button>
                </div>
            )
        }
        {/* {new Date().toLocaleDateString()}.
        We're currently open! */}
    </footer>
    // return React.createElement("footer", null, "We're currently open!");

}

// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)

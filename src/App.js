import "./index.css";

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
    soldOut: true,
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

function App() {
  return (
    <div className="container">
      {/* <h1>HELLO WORLD, my name is NILANCHALA PANDA. How are you !?</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co. </h1>
    </header>
  )
}

function Menu() {
  // const isPizzasAvailable = [];
  const isPizzasAvailable = pizzaData;
  const numPizza = isPizzasAvailable.length;
  // console.log(numPizza);

  return (

    <main className="menu">
      <h2> OUR MENU </h2>

      <p>Authentic Italian cusine. 6 creative dishes to choose from. All from our stone oven, all orgaginc, all delicious</p>

      {numPizza > 0 ?  (
        <ul className="pizzas">
        {/* /*** ONE WAY ***/}
        {/* {pizzaData.map(pizza => <Pizza name={pizza.name} img={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price} />)} */}

        {/* /*** SECOND WAY ***/}
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul> 
      ) : (
        <p> We're still working on the mwnu. Please come back later. </p>
      )}

    </main>
  )
}

// Destructing Props and directly using them in the code.
function Pizza({pizzaObj}) {
  // console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt="{pizzaObj.name}" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients} </p>

        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span> Price : ${pizzaObj.price} </span>} */}

        <span> {pizzaObj.soldOut ? "SOLD OUT" : `Price : ${pizzaObj.price}`} </span>
      </div>

    </li>
  )
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p> We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn"> ORDER NOW </button>
        </div>
      ) :
      (
        <p> We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
      )
      }

    </footer>
  )
}

export default App;

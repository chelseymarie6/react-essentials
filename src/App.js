import React from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";

// A component is a function that returns [a little bit of] UI 

// props is short for property wich gets passed to the function
function Header(props) {
  // console.log(props);
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p> We serve the most {props.adjective} food in Kailua.</p>

      <img 
        src={restaurant} 
        height={600} 
        alt="jungle vibe in a trendy restaurant">
      </img>

      {/* Have to use JS camelCase and not CSS hyphen */}
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>
            {dish.title}
          </li>
          )
        )}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <section>
      <p> Copyright {props.year}</p>
    </section>
  )
}

const dishes = [
  "Mac & Cheese",
  "Salmon & Rice",
  "Tofu & Veggies",
  "Soup of the Day & Crackers"
];

// Turn dishes into an object, then we will call the key value pairs with id and title
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
// console.log(dishObjects);


// What is getting displayed:
function App() {
  return (
    <div className="App">
      <Header name = "Andy"/>
      <Main adjective = "yummy" dishes={dishObjects}/>
      <Footer year = {new Date().getFullYear()} />
    </div>
  );
}

export default App;

function App() {
  return (
    <>
      {/* <h1>HELLO WORLD, my name is NILANCHALA PANDA. How are you !?</h1> */}
      <Header />
      <Pizza />
      <Menu />
      <Footer />
    </>
  );
}

function Header(){
  return(
    <>
      <h1> This is the Header of the file </h1>
    </>
  )
}

function Pizza(){
  return(
    <>
      <img src="/public/pizzas/focacci.jpg" alt="Focaccia" ></img>
      <h2>This is the pizza component :)</h2>
    </>
  )
}

function Menu() {
  return(
    <>
      <h1> MENU </h1>
    </>
  )
}

function Footer() {
  return(
    <>
      <h1> Footer </h1>
    </>
  )
}

export default App;

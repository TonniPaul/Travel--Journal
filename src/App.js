import Header from "./components/Header";
import Body from "./components/Body";
import data from "./components/Data";
import Footer from "./components/Footer";

function App() {
  const content = data.map( item =>{
    return (
      <Body 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      {content}
      <Footer/>
    </div>
  );
}

export default App;

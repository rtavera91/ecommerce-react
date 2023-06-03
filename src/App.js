import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to Square Clothing Co!</h1>
      <h2>Everything for your surf store</h2>
      <div className="container d-flex justify-content-center">
        <ItemListContainer
          className="p-2 h-100"
          name="PROWOODY FISH"
          description="Skimboard for all categories, from beginner to pro. With the same technology of our Prowoody boards but in a different design and size, recalling the first classic skims."
          price="$2,099"
          img="https://static.wixstatic.com/media/c2796c_fdb418acb29b41f48748045f5dc74bd6~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c2796c_fdb418acb29b41f48748045f5dc74bd6~mv2.jpg"
        />

        <ItemListContainer
          className="p-2"
          name="PROWOODY PACÍFICO"
          description="This board has SNAKE CORE & TURTLE ARMOR technology that consists of a layer of fiberglass on both sides which gives it greater resistance than our basic models. Ideal for intermediate/professional riders with greater height or body weight. This board adapts perfectly to low and medium waves. Guaranteed for more professional maneuvers, being an ideal board for the transition between basic and advanced at a more accessible cost."
          price="$2,699"
          img="https://static.wixstatic.com/media/c2796c_c4b43f8fa66346f38a97b3c88b802fc5~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c2796c_c4b43f8fa66346f38a97b3c88b802fc5~mv2.jpg"
        />
      </div>
    </div>
  );
}

export default App;

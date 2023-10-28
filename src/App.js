import NavbarComponent from "./component/navbar.components";
import ProductComponent from "./component/product.component";

function App() {
  return (
    <div className="md:container md:mx-auto px-8 no-scrollbar">
      <NavbarComponent />
      <ProductComponent />
    </div>
  );
}

export default App;

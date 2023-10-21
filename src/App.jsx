import {
  Header,
  Sales,
  Featured,
  Topstories,
  Footer,
  Cart,
} from "./containers/index";
import {
  headerState,
  popularsales,
  topratedsales,
  featured,
  highlight,
  footer,
} from "./store/store";

import { useSelector } from "react-redux";
import { selectCartState } from "./App/cartSlice/cartSlice";

function App() {
  const cartState = useSelector(selectCartState);

  return (
    <div>
      {cartState && <Cart />}
      <Header headerState={headerState} />
      <main className=" space-y-16">
        <Sales endpoint={popularsales} ifExits={true} />
        <Featured {...highlight} highlight={true} />
        <Sales endpoint={topratedsales} />
        <Featured {...featured} />
        <Topstories />
      </main>
      <Footer footer={footer} />
    </div>
  );
}

export default App;

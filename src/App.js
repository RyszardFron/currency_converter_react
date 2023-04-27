import Fieldset from "./Fieldset";
import Currency from "./Currency";
import Recalculate from "./Recalculate";
import Button from "./Button";
import Result from "./Result";
import Reset from "./Reset";
import Footer from "./Footer";

function App() {
  return (
    <Fieldset >
      <Currency />
      <Recalculate />
      <Button />
      <Result />
      <Reset />
      <Footer />
    </Fieldset>
  )
}

export default App;

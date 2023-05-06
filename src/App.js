import Fieldset from "./Fieldset";
import Currency from "./Currency";
import Recalculate from "./Recalculate";
import Button from "./Button";
import Result from "./Result";
import Reset from "./Reset";
import Footer from "./Footer";

function App() {
  return (
    <Fieldset title="KALKULATOR WALUT">
      <Currency title=" WYBIERZ symbol waluty*:" />
      <Recalculate
        title="MASZ - kwota do przeliczenia*:"
        symbol="PLN"
      />
      <Button title="PRZELICZ" />
      <Result title="OTRZYMASZ" />
      <Reset title="WYCZYŚĆ FORMULARZ" />
      <Footer
        note="* Pola wymagane"
        source=" Kursy średnie walut obcych NBP - tabela nr 225/A/NBP/2022 z dnia 2022-11-22"
      />
    </Fieldset>
  )
}

export default App;

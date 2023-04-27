import "./style.css";

import Currency from "../Currency";
import Recalculate from "../Recalculate";
import Result from "../Result";
import ClearForm from "../ClearForm";
import Footer from "../Footer/indeks";

const Fieldset = () => (

    <fieldset className="form__fieldset">
        <legend className="form__legend">KALKULATOR WALUT</legend>
        <Currency />
        <Recalculate />
        <Result />
        <ClearForm />
        <Footer />
    </fieldset>
);

export default Fieldset;
import "./style.css";

const Fieldset = ({ children }) => (

    <fieldset className="form__fieldset">
        <legend className="form__legend">KALKULATOR WALUT</legend>
        {children}
    </fieldset>
);

export default Fieldset;
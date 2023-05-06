import "./style.css";

const Fieldset = ({ children, title }) => (

    <fieldset className="form__fieldset">
        <legend className="form__legend">{title}</legend>
        {children}
    </fieldset>
);

export default Fieldset;
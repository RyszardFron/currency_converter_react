import "./style.css";

const Reset = ({title}) => (
    <input
        className="form__buttonReset"
        type="reset"
        value={title}
    />
);

export default Reset;
import "./style.css";

const Currency = () => (
    <p className="form">
        <label>
            <span className="form__labelText">
                WYBIERZ symbol waluty*:
            </span>
            <select
                className="form__field"
                name="currency"
                autofocus>
                <option value="EUR">EUR</option>
                <option value="GBD">GBD</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
                <option value="UAH">UAH</option>
            </select>
        </label>
    </p>
);


export default Currency;

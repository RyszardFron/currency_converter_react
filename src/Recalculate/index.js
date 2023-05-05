import "./style.css";

const Recalculate =({title, symbol}) => (
  <div className="form">
    <label>
      <span className="form__labelText">
        {title}
      </span>
      <input className="form__field"
        type="number"
        name="conversion"
        min="1"
        step="0.01"
        placeholder={symbol}
        required
      />
    </label>
  </div>
);

export default Recalculate;
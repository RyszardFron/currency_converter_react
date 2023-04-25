import "./style.css";

const Recalculate = () => (
  <div className="form">
    <label>
      <span className="form__labelText">
        MASZ - kwota do przeliczenia*:
      </span>
      <input className="form__field"
        type="number"
        name="conversion"
        min="1"
        step="0.01"
        placeholder="PLN"
        required
      />
    </label>
  </div>
);

export default Recalculate;
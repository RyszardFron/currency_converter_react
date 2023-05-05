import "./style.css";

const Footer = ({note, source}) => (
    <div className="Footer">
        <p>
            {note}
        </p>
        <p>
           {source}
        </p>
    </div>
);

export default Footer;
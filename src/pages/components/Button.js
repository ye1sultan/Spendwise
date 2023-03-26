import { useNavigate } from "react-router-dom";

const Button = (props) => {
    let text = props.text;
    let route = props.route;

    let width = props.width;
    let height = props.height;
    let bg = props.bg;
    let rounded = props.rounded;
    let size = props.size;
    let font = props.font;
    let bold = props.bold;
    let color = props.color;
    let display = props.display;

    let classes = `${width} ${height} ${bg} ${rounded} ${size} ${font} ${color} ${bold} ${display}`;

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    return (
        <button data-route={route} onClick={handleNavigation} className={classes}>
            {text}
        </button>
    );
}

export default Button;
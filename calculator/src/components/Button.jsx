// eslint-disable-next-line react/prop-types
const Button = ({ text, fn }) => {
  return (
    <button className="btn btn-primary" onClick={() => fn(text)}>
      {text}
    </button>
  );
};

export default Button;

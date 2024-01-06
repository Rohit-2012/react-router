import style from './Button.module.css'

const Button = ({ text, bgColor, handleFunction }) => {
  return (
      <button className={ style.main_button} style={{ backgroundColor: bgColor }} onClick={handleFunction}>
      {text}
    </button>
  );
};

export default Button;

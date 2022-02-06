import './MyButton.css';

const MyButton = ({ children, ...props }) => {
  const clases = props.className ? 'myBtn ' + props.className : 'myBtn';
  return (
    <button {...props} className={clases}>
      {children}
    </button>
  );
};

export default MyButton;

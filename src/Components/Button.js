import { ButtonSign } from './Styles/Button.styled';

const Button = ({children, variant}) => {
  return (
    <ButtonSign variant={variant}>{children}</ButtonSign>
  );
};

export default Button
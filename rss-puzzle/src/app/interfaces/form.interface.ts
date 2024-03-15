export interface InputProps {
  types?: string;
  placeholder: string;
  className: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

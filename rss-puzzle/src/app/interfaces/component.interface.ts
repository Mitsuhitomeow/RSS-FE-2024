export interface InputProps {
  types?: string;
  placeholder: string;
  className: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  attribute?: string;
}

export interface ImageProps {
  className: string;
  src: string;
  alt?: string;
  callback?: (() => void) | null;
}

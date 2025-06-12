import { Text } from 'react-native';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-medium',
  body: 'text-base',
  small: 'text-sm',
};

const Typography = ({
  variant = 'body',
  className = '',
  children,
}: TypographyProps) => {
  return (
    <Text className={`${variantStyles[variant]} ${className}`}>{children}</Text>
  );
};

export default Typography;

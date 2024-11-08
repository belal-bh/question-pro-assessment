import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

type DivProps = Omit<MyButtonProps, keyof ButtonHTMLAttributes<HTMLButtonElement>>;

const MyButton: React.FC<MyButtonProps> = ({ 
  children, 
  className = '',
  onClick,
  ...props 
}) => {
  const processChildren = (children: ReactNode, foundButton: boolean = false): [ReactNode, boolean] => {
    return [
      React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;

        // Handle button elements
        if (child.type === 'button') {
          if (!foundButton) {
            foundButton = true;  // Mark that we found our first button
            return React.cloneElement(child, {
              ...child.props,
              onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                onClick?.(e);
                child.props.onClick?.(e);
              },
            });
          } else {
            return React.cloneElement(child, {
              ...child.props,
              onClick: undefined,
              disabled: true,
              className: `${child.props.className || ''} opacity-50 cursor-not-allowed bg-gray-400` // Add disabled styling
            });
          }
        }

        // Recursively process nested children
        if (React.Children.count(child.props.children) > 0) {
          const [processedChildren, buttonFound] = processChildren(child.props.children, foundButton);
          foundButton = buttonFound;  // Update foundButton status
          return React.cloneElement(child, child.props, processedChildren);
        }

        // Return unchanged elements
        return child;
      }),
      foundButton
    ];
  };

  return (
    <div className={className} {...(props as DivProps)}>
      {processChildren(children)[0]}
    </div>
  );
};

export default MyButton;
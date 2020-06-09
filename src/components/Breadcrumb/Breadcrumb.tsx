import React from 'react';

interface Props {
  label: string;
}

const Breadcrumb: React.FC<Props> = ({ label, children }) => {
  return (
    <div>
      <span>{label}</span>
      {children}
    </div>
  );
};

export default Breadcrumb;

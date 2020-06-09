import React from 'react';

type Props = {
  label: string;
};

const Breadcrumb: React.FC<Props> = props => {
  const { children } = props;
  const getBreadcrumbItem = (child: any, index: number): JSX.Element => {
    const WrapperComp = child.props.originalType;
    const innerText = child.props.children;
    const isLastItem = index === React.Children.toArray(children).length - 1;
    const separator: JSX.Element | boolean = !isLastItem && (
      <span style={{ margin: 'auto 4px' }}> / </span>
    );

    return (
      <>
        <WrapperComp key={`${index}_brd`}>{innerText}</WrapperComp>
        {separator}
      </>
    );
  };

  const breadcrumb: JSX.Element[] = React.Children.toArray(children).map(getBreadcrumbItem);

  return (
    <div>
      <span style={{ display: 'flex', flexDirection: 'row' }}>{breadcrumb}</span>
    </div>
  );
};

export default Breadcrumb;

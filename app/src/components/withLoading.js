import React from 'react';

// Basic HOC for showing loading message
// const ComponentWithLoading = withLoading(Component);
// <ComponentWithLoading isLoading={state.isLoading} />
const withLoading = Component => ({ isLoading, ...props }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <Component {...props} />;
};

export default withLoading;

// Another idea
//<Loading isLoading={props/state.isLoading} >
//  <Thing>Only show after load finished</Thing>
//  <Thing>Only show after load finished</Thing>
//</Loading>

export const Loader = props => {
  const { isLoading, children } = props;

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return <>{ children }</>;
  }
};

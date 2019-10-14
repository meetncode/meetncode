import React from 'react';

const componentOrRender = (props, Component, render) => {
  if (Component) {
    return <Component {...props} />;
  }
  if (render) {
    return render(props);
  }

  return null;
};

export default componentOrRender;

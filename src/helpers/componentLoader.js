import React from 'react';

export default function loadComponent(path) {
  if(path){
    const Component = React.lazy(() =>
      import(path)
    );
    return Component;
  }

}
import React from 'react';
import { DefaultLayout } from 'layouts';

function withDefaultLayout<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <DefaultLayout>
      <Component {...props} />
    </DefaultLayout>
  )
}

export default withDefaultLayout;
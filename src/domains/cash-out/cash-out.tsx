import React from 'react';

import { withDefaultLayout } from 'layouts';

const CashOut: React.FC = () => {
  return (
    <>
      <p>You are in cash out</p>
    </>
  );
}

export default withDefaultLayout(CashOut);
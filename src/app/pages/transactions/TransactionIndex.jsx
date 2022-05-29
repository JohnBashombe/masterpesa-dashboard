import React from 'react';

import Transactions from './Transactions';

import { TransactionProvider } from '../../__context/index';

const TransIndex = () => (
  <TransactionProvider>
    <Transactions />
  </TransactionProvider>
);

export default TransIndex;

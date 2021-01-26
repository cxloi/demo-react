import React from 'react';
import { useSelector } from 'react-redux';
import { selectWholeStoreState } from '../redux/selectors';

const StoreState: React.FC = () => {
  const wholeStoreState = useSelector(selectWholeStoreState);

  return (
    <div data-testid="storeStatePage">
      <h2>Store State</h2>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(wholeStoreState, null, 4)}
      </div>
    </div>
  );
};

export default StoreState;

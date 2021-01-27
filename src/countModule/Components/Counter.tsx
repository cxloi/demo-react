import { decreaseCountAction, increaseCountAction } from 'countModule/countActions';
import { CustomButton } from 'demo-sb-react-components';
import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from 'redux/selectors';

const styles: Record<string, CSSProperties> = {
  countContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countTextContainer: {
    width: 120,
  },
  userDetailsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
};

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div style={styles.countContainer}>
      <CustomButton label="-" onClick={() => dispatch(decreaseCountAction())} />
      <div style={styles.countTextContainer}>COUNT: {count}</div>
      <CustomButton label="+" onClick={() => dispatch(increaseCountAction())} />
    </div>
  );
};

export default Counter;

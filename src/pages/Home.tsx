import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../redux/selectors';

const Home = () => {
  const count = useSelector(selectCount);

  return (
    <div>
      <h2>HOME</h2>
      <div>
        COUNT:
        {count}
      </div>
    </div>
  );
};

export default Home;

import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import AuthContext from '../../store/auth-context';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';

const Home = () => {
  const autchCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={autchCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

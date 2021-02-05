import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(51,51,51)',
  },
  paper0: {
    margin: theme.spacing(1),
    padding: theme.spacing(5),
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'rgb(51,51,51)',
  },
  paper2: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'rgb(51,51,51)',
  },
  containerBorder: { borderWidth: 1, borderColor: '#000000', borderStyle: 'solid' },
}));

const ThreeColumnGrid = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={5}
      className={classes.containerBorder}
    >
      <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.paper2}>Card A</Paper>
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.paper2}>Card B</Paper>
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
        <Paper className={classes.paper2}>Card C</Paper>
      </Grid>
    </Grid>
  );
};

const ResponsiveList = () => {
  const classes = useStyles();

  return (
    <div style={{ borderColor: '#000000', borderStyle: 'solid', borderWidth: 1 }}>
      <h2>List Title</h2>
      <br />

      {/* xl={4} lg={4} md={6} sm={6} xs={12} */}
      <h4>External grid library</h4>
      <Container fluid>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12} xs={24}>
            <Paper className={classes.paper0}>column 1</Paper>
          </Col>
          <Col xl={8} lg={8} md={12} sm={12} xs={24}>
            <Paper className={classes.paper0}>column 2</Paper>
          </Col>
          <Col xl={8} lg={8} md={12} sm={12} xs={24}>
            <Paper className={classes.paper0}>column 3</Paper>
          </Col>
        </Row>
      </Container>

      {/* <h4>justify center</h4>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.containerBorder}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid> */}

      <h4>material ui grid</h4>
      <ThreeColumnGrid />

      {/* <h4>nested grid</h4>
      <Grid
        container
        spacing={3}
        className={classes.containerBorder}
      >
        <Grid item xs={2} />
        <Grid item xs={8}>
          <ThreeColumnGrid />
        </Grid>
        <Grid item xs={2} />
      </Grid> */}

      {/* <h4>grid in div</h4>
      <div style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}>
        <ThreeColumnGrid />
      </div> */}

      <Card />
    </div>
  );
};

export default ResponsiveList;

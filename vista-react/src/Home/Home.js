//import css
import "./SCSS/Home.css";
//imports de material-ui para generar  el Tab
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';


const HomeComponent = () => {


    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }

    
    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },
      });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = createMuiTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          new: {
            light: '#BEB06B',
            main: '#BEB06B',
            dark: '#BEB06B',
            contrastText: '#BEB06B',
          },
        },
      });

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
        setValue(index);
      };

  return (
    <div id="containerHome">
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="new"
        textColor="new"
        centered
      >
        <Tab value={0} label="Who we are?" />
        <Tab value={1} label="What we do?" />
        <Tab value={2} label="Join as?" />
      </Tabs>
        <SwipeableViews
         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
         index={value}
         onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim temporibus aliquid accusantium eligendi at debitis officia distinctio, cum tempore dolorem, saepe eius, repellat consequuntur harum ab vero fugit quae.
        </TabPanel>
        </SwipeableViews>
    </Paper>
    </div>
    
  );
};

export default HomeComponent;

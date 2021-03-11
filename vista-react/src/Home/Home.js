//import css
import "./SCSS/Home.css";
//imports de material-ui para generar  el Tab
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";

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
        main: "#BEB06B",
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
      <Paper className={classes.root} as="div">
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value={0} label="Who we are?" />
            <Tab value={1} label="What we do?" />
            <Tab value={2} label="Join as?" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel
              value={value}
              index={0}
              dir={theme.direction}
              className="infoS"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              laboriosam molestias accusantium? Laudantium debitis facere,
              perferendis suscipit, facilis voluptate a blanditiis aspernatur,
              sint ipsa velit? Nisi obcaecati veniam libero magnam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Expedita laboriosam
              molestias accusantium? Laudantium debitis facere, perferendis
              suscipit, facilis voluptate a blanditiis aspernatur, sint ipsa
              velit? Nisi obcaecati veniam libero magnam.
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              dir={theme.direction}
              className="infoS"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              laboriosam molestias accusantium? Laudantium debitis facere,
              perferendis suscipit, facilis voluptate a blanditiis aspernatur,
              sint ipsa velit? Nisi obcaecati veniam libero magnam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Expedita laboriosam
              molestias accusantium? Laudantium debitis facere, perferendis
              suscipit, facilis voluptate a blanditiis aspernatur, sint ipsa
              velit? Nisi obcaecati veniam libero magnam. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Expedita laboriosam molestias
              accusantium? Laudantium debitis facere, perferendis suscipit,
              facilis voluptate a blanditiis aspernatur, sint ipsa velit? Nisi
              obcaecati veniam libero magnam. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Expedita laboriosam molestias
              accusantium? Laudantium debitis facere, perferendis suscipit,
              facilis voluptate a blanditiis aspernatur, sint ipsa velit? Nisi
              obcaecati veniam libero magnam.
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              dir={theme.direction}
              className="infoS"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              laboriosam molestias accusantium? Laudantium debitis facere,
              perferendis suscipit, facilis voluptate a blanditiis aspernatur,
              sint ipsa velit? Nisi obcaecati veniam libero magnam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Expedita laboriosam
              molestias accusantium? Laudantium debitis facere, perferendis
              suscipit, facilis voluptate a blanditiis aspernatur, sint ipsa
              velit? Nisi obcaecati veniam libero magnam. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Expedita laboriosam molestias
              accusantium? Laudantium debitis facere, perferendis suscipit,
              facilis voluptate a blanditiis aspernatur, sint ipsa velit? Nisi
              obcaecati veniam libero magnam. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Expedita laboriosam molestias
              accusantium? Laudantium debitis facere, perferendis suscipit,
              facilis voluptate a blanditiis aspernatur, sint ipsa velit? Nisi
              obcaecati veniam libero magnam. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Expedita laboriosam molestias
              accusantium? Laudantium debitis facere, perferendis suscipit,
              facilis voluptate a blanditiis aspernatur, sint ipsa velit? Nisi
              obcaecati veniam libero magnam.
            </TabPanel>
          </SwipeableViews>
        </ThemeProvider>
      </Paper>

      <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.googleapis.com/static-content-hc/sites/default/files/granviasuperiorterracejacuzzi-min_0.jpg"
            alt="hotel1"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://as.com/epik/imagenes/2018/09/13/portada/1536833680_004140_1536833811_noticia_normal.jpg"
            alt="hotel2"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cadenaser00.epimg.net/ser/imagenes/2017/07/21/sociedad/1500650308_386531_1500650567_noticia_normal.jpg"
            alt="hotel3"
          />
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default HomeComponent;

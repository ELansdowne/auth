import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit,
    width: "49%"
  },
  card: {
    margin: "2% 4% 2% 4%",
    padding: "1%"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: { useNextVariants: true }
});

export class PersonalDetails extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Personal Details
            </Typography>
          </CardContent>

          <MuiThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              label="First name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              className={classes.margin}
              label="Last name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              className={classes.margin}
              label="Mobile number"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              type="number"
            />
          </MuiThemeProvider>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(PersonalDetails);

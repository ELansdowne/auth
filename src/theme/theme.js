import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";
import yellow from "@material-ui/core/colors/yellow";

export default createMuiTheme({
  palette: {
    primary: yellow,
    secondary: purple
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        "&:hover": {
          backgroundColor: "purple"
        }
      }
    }
  }
});

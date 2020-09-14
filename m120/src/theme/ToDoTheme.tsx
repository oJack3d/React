import { createMuiTheme } from '@material-ui/core/styles'
import { orange, yellow, pink, purple } from '@material-ui/core/colors'

export const defaultToDoTheme = createMuiTheme()

export const ToDoTheme = createMuiTheme({
    palette: {
      primary: pink,
      secondary: purple,
    },
  });


import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(Date.now);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const useStylesPicker = makeStyles({
    input: {
      fontSize: 25
    }
  });

  const classes = useStylesPicker();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy/MM/dd"
        margin="normal"
        id="date-picker"
        label=""
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        InputProps={{
          classes: {
            input: classes.input
          }
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

export default function DateInputButton({ setTime, setDate }) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick a date"
        value={value}
        onChange={(newValue) => {
          if (newValue) {
            const day = newValue.date();
            const month = newValue.month() + 1;
            const year = newValue.year();

            const second = new Date().getSeconds();
            const minute = new Date().getMinutes();
            const hour = new Date().getHours();

            const date = `${day}-${month}-${year}`;
            const time = `${second}:${minute}:${hour}`;

            setDate(date);
            setTime(time);

            setValue(newValue);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

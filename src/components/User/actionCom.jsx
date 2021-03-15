import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

export default function UserAction(props) {
  const classes = useStyles();
  const [action, setAction] = React.useState('none');

  const handleChange = (event) => {
    setAction(event.target.value);
    console.log(props.select)
    console.log(action)
};

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={action}
          onChange={handleChange}
        >
          <MenuItem value='edit'>Edit</MenuItem>
          <MenuItem value='delete'>Delete</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import "./App.css";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const handleAPI = async () => {
      const { data } = await axios.get("/api/employees");
      const newEmployees = data.employees || [];
      setEmployees(newEmployees);
    };

    handleAPI();
  }, []);
  return employees;
};

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(5),
  },
}));

function App() {
  const employees = useEmployees();
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction="column" spacing={2} alignItems="center">
          {employees.map((value, index) => {
            const { name, title, department, joined } = value;
            const key = `${name}-${index}`;
            return (
              <Grid item key={key}>
                <Card raised className={classes.card}>
                  <Typography variant="h4">{name}</Typography>
                  <Typography variant="subtitle1" align="center">
                    {title} • {department}
                  </Typography>
                  <Typography variant="body1">
                    {name} has been at the company since {joined}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </header>
    </div>
  );
}

export default App;

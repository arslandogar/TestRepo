import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Drawer from "../../../Core/Layout/AdminSideBar/AdminSideBar";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import AutoSelect from "react-select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%"
  },
  heroContent: {
    marginTop: theme.spacing(12)
  }
}));

const MakeTransactionPurchaseView = props => {
  const classes = useStyles();

  const {
    suppliersList,
    productsList,
    quantity,
    costPrice,
    total,
    onChange,
    changeSupplierState,
    supplierId
  } = props;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = value => {
    console.log(value);
  };

  const options = [
    { value: "Gustaavo", label: "Gustaavo" },
    productsList.map(object => ({
      value: object.productId,
      label: object.productName
    }))
  ];

  const rows = [
    { label: "CD101", value: "CD70CD" },
    { label: "CD101", value: "CD70CD" }
  ];

  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  Purchase Order
                </Typography>
              </Grid>

              <Grid item lg={3} md={4} sm={4} xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="supplierdropdown">
                    Supplier
                  </InputLabel>
                  <Select
                    value={supplierId}
                    onChange={changeSupplierState}
                    //style={{ height: "45px" }}
                    input={
                      <OutlinedInput
                        labelWidth={labelWidth}
                        name="supplierId"
                        id="supplierdropdown"
                      />
                    }
                  >
                    {suppliersList.map(object => (
                      <MenuItem
                        key={object.supplierId}
                        value={object.supplierId}
                      >
                        {object.supplierName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={3} md={4} sm={4} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    //margin="normal"
                    style={{ width: "100%" }}
                    id="date-picker-inline"
                    label="Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item lg={3} md={4} sm={4} xs={12}>
                <AutoSelect
                  className="basic-single"
                  classNamePrefix="select"
                  //defaultValue={options[0]}
                  isClearable={true}
                  isSearchable={true}
                  name="color"
                  options={productsList.map(object => ({
                    value: object.productId,
                    label: object.productName
                  }))}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item lg={10} md={8} sm={12} xs={12}>
                <Table aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Item SKU
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Item Name
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Quantity
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Cost Price
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textPrimary" variant="h6">
                          Remove
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.label}>
                        <TableCell>{row.label}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>
                          <TextField
                            id="quantityText"
                            name="quantity"
                            value={quantity}
                            style={{ width: "60px" }}
                            onChange={onChange}
                            inputProps={{ "aria-label": "bare" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="costPriceText"
                            name="costPrice"
                            value={costPrice}
                            style={{ width: "70px" }}
                            onChange={onChange}
                            inputProps={{ "aria-label": "bare" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="totalText"
                            name="total"
                            value={total}
                            style={{ width: "80px" }}
                            onChange={onChange}
                            inputProps={{ "aria-label": "bare" }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              justify="flex-end"
              style={{ marginTop: "100px" }}
            >
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                style={{ marginRight: "100px" }}
              >
                <Table className={classes.table} aria-label="spanning table">
                  <TableBody>
                    <TableRow>
                      <TableCell>Sub Total</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tax</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              justify="flex-end"
              style={{ marginTop: "100px" }}
            >
              <Grid item xs={5} lg={2} md={2} sm={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ background: "#0781bd" }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={5} lg={2} md={2} sm={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{
                    background: "#4ea832",
                    marginRight: "100px",
                    marginLeft: "30px"
                  }}
                >
                  Bill
                </Button>
              </Grid>
            </Grid>
            <div style={{ marginBottom: "100px" }}></div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default MakeTransactionPurchaseView;

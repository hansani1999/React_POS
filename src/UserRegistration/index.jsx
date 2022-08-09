import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import UploadIcon from '@mui/icons-material/Upload';
import CardContent from "@mui/material/CardContent";
import GroupIcon from "@mui/icons-material/Group";
import Card from "@mui/material/Card";
import GDSESnackBar from "../Components/SnackBar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import UserService from "../services/UserService";

class UserRegistration extends Component{
    constructor(props) {
        super(props);

        this.state={
            formData:{
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                city: '',
                street: '',
                streetNo:'',
                zipCode:'',
                lastValue:'',
                longValue:'',
                mobileNo:''
            },
            form:{
                address:{
                    city: '',
                    geolocation:{lat: '', long: ''},
                    number: '',
                    street: '',
                    zipcode: ''
                },
                email: '',
                id: '',
                name:{firstname: '', lastname: ''},
                password: '',
                phone: '',
                username: ''
            },

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'success',
            fuelTypeList: [
                { label: 'Petrol'},
                { label: 'Diesel'},
            ],
            transmissionTypeList: [
                { label: 'Auto'},
                { label: 'Manual'},
            ],
            fileImg1:null,
            fileImg2:null,
            fileImg3:null,
            fileImg4:null,
            openAlert:false,
            carDeleteId:''
        }
    }


    StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }))

    StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    handleClickOpen = (id) => {
        this.setState({openAlert: true,carDeleteId:id})
    };

    handleClose = () => {
        this.setState({openAlert:false})
    };

    submitCustomer = async()=>{
        let formData = this.state.form;
        if(this.state.btnLabel === "save") {
            let res = await UserService.postUser(formData);

            console.log(res)    //print the promise

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: "User Registered Successfully",
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: "Error",
                    severity: 'error'
                });
            }
        } else {
            let res = await UserService.putUser(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: "Updated Successfully",
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary',
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: "Error",
                    severity: 'error'
                });
            }
        }
    }

    loadData = async () => {
        let res = await UserService.fetchUser();

        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }
        console.log(this.state.data)
    };

    componentDidMount() {
        this.loadData();
    }

    editCarOnClick = (data) => {
        console.log(data)
        let formData = this.state.form;
        formData = data

        this.setState({
            form:{
              address:{
                  city: data.address.city,
                  geolocation:{lat: data.address.geolocation.lat, long: data.address.geolocation.long},
                  number: data.address.number,
                  street: data.address.street,
                  zipcode: data.address.zipcode
              },
              email: data.email,
              id: '',
              name:{firstname: data.name.firstname, lastname: data.name.lastname},
              password: data.password,
              phone: data.phone,
              username: data.username
            }
        })
        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
        });

    };

    loadCarImages= () =>{

    }

    deleteUser = async (id) => {
        console.log(id)

        let res = await UserService.deleteUser(id);
        if (res.status===200){
            this.setState({
                alert: true,
                message: "Deleted",
                severity: 'success'
            });
            this.handleClose()
            this.setState({carDeleteId:''})
            this.loadData();
            console.log(this.state.carDeleteId)
        }else {
            this.setState({
                alert: true,
                message: "Error",
                severity: 'error'
            });
        }
    };

    clearFields = () => {
        this.setState({
            form:{
                address:{
                    city: '',
                    geolocation:{lat: '', long: ''},
                    number: '',
                    street: '',
                    zipcode: ''
                },
                email: '',
                id: '',
                name:{firstname: '', lastname: ''},
                password: '',
                phone: '',
                username: ''
            }
        });
    };


    render() {
        let { classes } = this.props
        return (
            <Fragment>
                <Grid item lg={12} xs={12} sm={12} md={12} pb={2}>
                    <Typography variant="h4" p={2} style={{display:'flex',justifyContent:'center'}}>User Registration</Typography>
                </Grid>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} style={{backgroundColor:'#eeeeee'}}>
                    <Grid container className="pt-2" spacing={3} p={5}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">First Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="CR-001"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.name.firstname}
                                onChange={(e) => {
                                    let form = this.state.form
                                    form.name.firstname = e.target.value
                                    this.setState({form})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Last Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Toyota"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.name.lastname}
                                onChange={(e) => {
                                    let form = this.state.form
                                    form.name.lastname = e.target.value
                                    this.setState({form})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.email}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">User Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="no. of passengers"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.username}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.username = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                type="password"
                                style={{width: '100%'}}
                                value={this.state.form.password}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.password = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">City</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.city}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.city = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Street</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.street}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.street = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Street No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.number}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.number = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Zip Code</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.zipcode}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.zipcode = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Last Value</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.geolocation.lat}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.geolocation.lat= e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Long Value</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.address.geolocation.long}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.address.geolocation.long = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Mobile No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.form.phone}
                                onChange={(e) => {
                                    let formData = this.state.form
                                    formData.phone = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid container style={{marginTop: '30px'}} direction="row" justifyContent="flex-end" spacing={4}>
                            <Button type="submit" variant="contained" color={this.state.btnColor} style={{marginLeft:3}}> {this.state.btnLabel} </Button>
                            <Button type="button" variant="contained" color="warning" onClick={this.clearFields} style={{marginLeft:3}}>Clear </Button>
                        </Grid>
                    </Grid>
                    <GDSESnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({alert: false})
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
                </ValidatorForm>

                <Grid contaner style={{marginTop: '15px', marginLeft: '10px', marginRight: '10px'}} pt={5}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <this.StyledTableCell align="left">First Name</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Last Name</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Email</this.StyledTableCell>
                                    <this.StyledTableCell align="left">User Name</this.StyledTableCell>
                                    <this.StyledTableCell align="left">City</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Street</this.StyledTableCell>
                                    <this.StyledTableCell align="left">StreetNo</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Zip Code</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Last Value</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Long Value</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Phone</this.StyledTableCell>
                                    <this.StyledTableCell align="left">Action</this.StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.name.firstname}</TableCell>
                                            <TableCell align="left">{row.name.lastname}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.address.city}</TableCell>
                                            <TableCell align="left">{row.address.street}</TableCell>
                                            <TableCell align="left">{row.address.number}</TableCell>
                                            <TableCell align="left">{row.address.zipcode}</TableCell>
                                            <TableCell align="left">{row.address.geolocation.long}</TableCell>
                                            <TableCell align="left">{row.address.geolocation.lat}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.editCarOnClick(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton>
                                                        <DeleteIcon
                                                            color="error"
                                                            onClick={() => {
                                                                console.log("edit icon clicked!")
                                                                this.deleteUser(6)
                                                                //this.deleteCar(row.carRegId);
                                                            }}
                                                        />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Fragment>
        )
    }
}

export default UserRegistration;
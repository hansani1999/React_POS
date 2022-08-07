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
import img from "../assets/images/blank.jpg";

class ProductManage extends Component{
    constructor(props) {
        super(props);

        this.state={
            formData: {
                title: '',
                price: '',
                category: '',
                description: '',
                img1:'',

            },
            fileImg1:"",
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
        let formData = new FormData();
        formData.append('carRegId',this.state.formData.carRegId)
        formData.append('brand',this.state.formData.brand)
        formData.append('type',this.state.formData.type)
        formData.append('noOfPassengers',this.state.formData.noOfPassengers)
        formData.append('colour',this.state.formData.colour)
        formData.append('fuelType',this.state.formData.fuelType)
        formData.append('transmissionType',this.state.formData.transmissionType)
        formData.append('freeMileage',this.state.formData.freeMileage)
        formData.append('priceForExtraKm',this.state.formData.priceForExtraKm)
        formData.append('cImg1',this.state.formData.img1)
        formData.append('cImg2',this.state.formData.img2)
        formData.append('cImg3',this.state.formData.img3)
        formData.append('cImg4',this.state.formData.img4)

        let res = "";

        console.log(res)

        if (res.status===200){
            console.log("Car saved successfully!")
            this.loadData()
            this.clearFields()
            this.setState({alert:true,severity:'success',message:res.data.message})
        }
    }

    loadData = async () => {
        let res = "";

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        /*this.exampleForMap()*/

    };

    editCarOnClick = (data) => {
        console.log(data)
        console.log(data.transmissionType)
        let formData = this.state.formData

        formData.carRegId= data.carRegId
        formData.brand= data.brand
        formData.type= data.type
        formData.noOfPassengers= data.noOfPassengers
        formData.colour= data.colour
        formData.fuelType= data.fuelType
        formData.transmissionType= data.transmissionType
        formData.freeMileage=data.freeMileage
        formData.priceForExtraKm=data.priceForExtraKm
        formData.img1=data.img1
        formData.img2=data.img2
        formData.img3=data.img3
        formData.img4=data.img4

        this.setState({formData})
        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            /*fileImg1:URL.createObjectURL(data.img1),
            fileImg2:URL.createObjectURL(data.img2),
            fileImg3:URL.createObjectURL(data.img3),
            fileImg4:URL.createObjectURL(data.img4)*/
        });
        this.loadCarImages();
        console.log(this.state.formData.carRegId)
        console.log(this.state.formData.transmissionType)
    };

    loadCarImages= () =>{

    }

    deleteCar = async (id) => {
        console.log(id)

        let res = "";
        if (res.status===200){
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.handleClose()
            this.setState({carDeleteId:''})
            this.loadData();
            console.log(this.state.carDeleteId)
        }else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    clearFields = () => {
        this.setState({
            formData: {
                title: '',
                price: '',
                category: '',
                description: '',
                img1:'',

            },
            fileImg1:null,
        });
    };


    componentDidMount() {
        this.loadData()
    }

    render() {
        let { classes } = this.props
        return (
            <Fragment>
                <Grid item lg={12} xs={12} sm={12} md={12} pb={2}>
                    <Typography variant="h4" p={2} style={{display:'flex',justifyContent:'center'}}>Product Management</Typography>
                </Grid>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} style={{backgroundColor:'#eeeeee'}}>
                    <Grid container className="pt-2" spacing={3} p={5}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Title</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="CR-001"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Toyota"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.price = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Category</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                inputValue={this.state.formData.category}
                                options={this.state.category}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="category" />}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                onChange={(e, value) => {
                                    let formData = this.state.formData
                                    formData.category = value.label
                                    this.setState({formData})
                                    console.log(value.label);
                                    console.log(formData)
                                }}
                                size="small"
                                style={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Description</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="colour"
                                variant="outlined"
                                size="large"
                                style={{width: '100%'}}
                                value={this.state.formData.description}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.description = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} style={{display:'flex',justifyContent:'center',flexDirection:'flex-start'}}>
                            <div style={{width:'200px'}}>
                                <img alt="" src={this.state.fileImg1} style={{width:'270px'}}/>
                            </div>
                        </Grid>
                        <Grid container direction="start" justifyContent="center">
                            <Button variant="contained" style={{marginLeft:3,marginBottom:3}} startIcon={<UploadIcon />} component="label">Choose Image
                                <input hidden accept="image/*" multiple type="file"
                                       onChange={(e)=>{
                                           let formData = this.state.formData
                                           formData.img1 = e.target.files[0];
                                           this.setState({formData})
                                           console.log(this.state.formData.img1)
                                           this.setState({fileImg1:URL.createObjectURL(e.target.files[0])})
                                       }}
                                />
                            </Button>
                        </Grid>
                        <Grid container style={{marginTop: '30px'}} direction="row" justifyContent="flex-end" spacing={4}>
                            <Button type="submit" variant="contained" color={this.state.btnColor} style={{marginLeft:3}}> {this.state.btnLabel} </Button>
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
                <div>
                    {/*<Button variant="outlined" onClick={this.handleClickOpen}>
                        Open alert dialog
                    </Button>*/}
                    <Dialog
                        open={this.state.openAlert}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to delete this Car?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                All the data for this car will be removed
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose}>No</Button>
                            <Button onClick={()=>{
                                this.deleteCar(this.state.carDeleteId)
                            }} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </Fragment>
        )
    }
}

export default ProductManage;
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSESnackBar from "../../Components/SnackBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
/******/


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName: 'admin',
            password: 'admin',
            formData:{
                userName:'',
                password:''
            },
            //for snackbar
            open:false,
            message:'',
            severity:''
        }
    }

    checkValidity(){
        console.log(this.state.userName)
        console.log(this.state.password)
        let data = this.state.formData;

        if(data.userName===this.state.userName && data.password===this.state.password){
            console.log("Credentials Matched")
            this.setState({
                    open: true,
                    message:'User credential matching success!',
                    severity:'success'
            })
        }else {
            console.log("Credentials don't match!")
            this.setState({
                open: true,
                message:'User credential not matching!',
                severity:'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                            onChange={(e)=>{
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.userName=e.target.value
                                this.setState({formData})
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e)=>{
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password=e.target.value
                                this.setState({formData})
                            }}
                        />
                    </div>
                    <div className={classes.btn__container1}>
                        <Button
                            variant="contained"
                            label="Login"
                            onClick={()=>{
                                console.log("login clicked!")
                                this.checkValidity()
                            }}
                        >Login</Button>
                        <div className={classes.btn__container2}>
                            <Typography p={1}>Create New User Account?</Typography>
                            <Link to="/">
                                <Button>Click Here</Button>
                            </Link>
                        </div>

                    </div>
                </div>
                    <GDSESnackBar
                        open={this.state.open}
                        onClose={()=>{
                            this.setState({open:false})
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)
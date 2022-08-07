import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class Dashboard extends Component{
    constructor(props) {
        super(props);


    }


    render() {
        let { classes } = this.props
        return (
            <Fragment>
                <Grid item lg={12} xs={12} sm={12} md={12} style={{display:'flex',justifyContent:'center',paddingTop:'20px'}}>
                    <Typography variant="h4">Dashboard</Typography>
                </Grid>
                <Grid container className="pt-2" spacing={1} p={10}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#ab47bc',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">60</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <CategoryIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Products</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#00b8d4',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">12</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <ShoppingCartIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Carts</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#8bc34a',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">43</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Users</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default Dashboard;
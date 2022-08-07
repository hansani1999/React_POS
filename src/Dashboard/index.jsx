import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import GroupIcon from '@mui/icons-material/Group';

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
                                    <Typography variant="h2" component="div">25</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Total Customers</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#00b8d4',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">25</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Available Cars</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#ff9800',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">25</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Total Rented</Typography>
                                </CardContent>
                            </Card>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#8bc34a',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">25</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#ec407a',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">20</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <div style={{height:'140px',backgroundColor:'#3f51b5',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Typography variant="h2" component="div">30</Typography>
                                </div>
                                <CardContent style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <GroupIcon fontSize="large" style={{marginRight:'10px'}}/>
                                    <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
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
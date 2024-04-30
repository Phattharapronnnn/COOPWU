import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import {LinearProgress} from "@mui/joy";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DetailUser() {
    const params = useParams();
    const [isReady, setIsReady] = useState(false);
    const [data, setData] = useState({});

    console.log("params", params);
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.bold" gutterBottom>
              Detail user
            </Typography>
            <Typography variant="h4" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/${params.id}`)
          .then((res) => {
            setData(res.data);
            setIsReady(true);
            console.log("data", data);
          });       
        return () => {};
      }, [params]);

      if (!isReady) {
        return (
          <div>
            <LinearProgress />
          </div>
        );
      }

      return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
    }



export default DetailUser;
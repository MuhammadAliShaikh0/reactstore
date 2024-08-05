import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Cards({ title, desc, image, id }) {
  
const navigate = useNavigate();

const handleAdd = () => {
  navigate(`/product/${id}`);
};
  return (
    <Card sx={{ maxWidth: 345 ,marginTop:"20px"}}>
      <CardMedia sx={{width:"300px",height:"300px"}} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0,20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={handleAdd} className="card-button">Add</Button>
      </CardActions>
    </Card>
  );
}


import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';

type CardProps = {
    img: {
        _id: string;
        name: string;
        originalName: string;
        image: string;
    }
  };

const Cards:React.FC<CardProps> = ({img}) => {
    const {image, name} = img
    console.log(img)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-9'>
      {/* <Image src={image} alt={name} width={550} height={320}/>
      <div className="flex justify-between">
      <h2>Name: {name}</h2>
      <Button > Delete </Button>
      </div> */}
      <Card className='border-[1px] border-gray-300' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        /> */}
        <Image src={image} alt={name} width={550} height={120}/>
        <CardContent className='flex justify-between'>
          <Typography gutterBottom variant="h5" component="div">
            Name: {name}
          </Typography>
          <CardActions>
          <Button onClick={()=>{}} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Cards

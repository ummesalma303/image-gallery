import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

type CardProps = {
  img: {
    _id: string;
    name: string;
    originalName: string;
    image: string;
  };
};

const Cards: React.FC<CardProps> = ({ img }) => {
  const router = useRouter();
  const { _id, image, name } = img;

  
  const deleteImage = async (id: string) => {
    
   try{
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      const res = await fetch(`http://localhost:3000/api/gallery/${id}`, {
        method: "DELETE",
      });
  
      const data = await res.json();
      if (data.deletedCount > 0) {

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        router.refresh();
      }
  
      console.log(data);
    }
   }catch(error){
    console.log(error)
    Swal.fire({
      title: "Error",
      text:` ${error.message}`,
      icon: "error",
    });

   }
  };
  

  return (
    <div >
      
          <Card
            className="border-[1px] border-gray-300 cursor-pointer"
            sx={{ maxWidth: 445,maxHeight: 345 }}
          >
            <CardActionArea>
            <PhotoProvider>
            <PhotoView src={image}>
             <div className="h-36">
             <Image className='h-full'
                src={image}
                alt={name}
                width={550}
                height={60}
                style={{ objectFit: 'cover' }}
              />
             </div>
               </PhotoView>
               </PhotoProvider>
               </CardActionArea>
               {/* card content */}
              <CardContent className="flex justify-between items-center">
                <Typography gutterBottom variant="h6" component="div">
                  Title: {name}
                </Typography>

            <CardActions>
              <Button
                onClick={() => deleteImage(_id)}
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
              </CardContent>
            
          </Card>
       
    </div>
  );
};

export default Cards;

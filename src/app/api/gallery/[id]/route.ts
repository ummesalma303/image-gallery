import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";



 export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  
   try {
    
    const result = await dbConnect("images").deleteOne({ _id: new ObjectId(params.id) });

     return Response.json({result});
   }catch(error){
     console.log(error)
     return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
   }
 }
  

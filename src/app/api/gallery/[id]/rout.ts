import dbConnect from "@/lib/dbConnect"

 export async function DELETE(reqest:Request,{ params }: { params: { id: string } }) {
   try {
    
     const data = await dbConnect("images").deleteOne({ _id: new ObjectId(params.id) })
     
     return Response.json({ data});
   }catch(error){
     console.log(error)
     return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
   }
 }
  

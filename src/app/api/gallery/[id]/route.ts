// import dbConnect from "@/lib/dbConnect"
// import { ObjectId } from "mongodb";



//  export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  
//    console.log('----------params------------ ',params)
//    try {
//     // const result = await dbConnect("images").deleteOne({ _id: new ObjectId(params?.id) });

//     //  return Response.json({result});
//     if (!ObjectId.isValid(params.id)) {
//       return Response.json({ error: 'Invalid ID format' }, { status: 400 });
//     }

//     const result = await dbConnect("images").deleteOne({ _id: new ObjectId(params.id) });

//     if (result.deletedCount === 0) {
//       return Response.json({ error: 'Document not found' }, { status: 404 });
//     }
//    }catch(error){
//      console.log(error)
//      return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
//    }
//  }
  





import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    console.log('----------params------------ ', params);
    
    if (!ObjectId.isValid(params.id)) {
      return Response.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const result = await dbConnect("images").deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return Response.json({ error: 'Document not found' }, { status: 404 });
    }

    // Add this return for successful deletion
    return Response.json({ success: true, deletedCount: result.deletedCount });

  } catch(error) {
    console.error('Delete error:', error);
    return Response.json({ error: 'Failed to delete document' }, { status: 500 });
  }
}
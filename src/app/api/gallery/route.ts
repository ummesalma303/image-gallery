import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from 'next/cache'

export async function GET() {
  try {
    const data = await dbConnect("images").find().toArray()
    console.log(data)
    return Response.json({ data});
  }catch(error){
    console.log(error)
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
    try {
        
        const req = await request.json()
        console.log('-----------19',req)
        const result = await dbConnect("images").insertOne(req)
        revalidatePath('/');
    return Response.json({ result })
    } catch (error) {
        console.log(error)
        return Response.json({ error: 'Failed to fetch data' }, { status: 500 })
    }
    
  }


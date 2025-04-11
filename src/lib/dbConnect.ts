import { MongoClient, ServerApiVersion } from "mongodb"

const uri = 'mongodb+srv://ImageGalleryUser:4O58hOYRV7TBdU92@cluster0.ot76b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNames = {
  images: "images",
  // PRACTICE_DATA: "practice_data"
}

function dbConnect(collectionName:string) {
  console.log(uri, collectionName)
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db("ImageGellary").collection(collectionName)
}

export default dbConnect;
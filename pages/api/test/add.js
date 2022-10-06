import connectMongo from "../../../utils/connectMongo";
import Test from "../../../models/testModel";

export default async function addTest(req, res) {
    const {name, phone, email, concern} = req.body;
    // console.log('connecting to mongo')
   await connectMongo()
//    console.log('connect to Mongo')

   console.log('creating document')
   const test = await Test.create(req.body)
//    console.log('document created')
   res.json({test});
  }
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email",async(req,res)=>{
  try{
    const {email,subject,message} = req.body;

    const respose = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "amitwanave418@gmail.com",
      subject: subject,
      html: `
        <h3> New Email </h3>
        <p><strong>from:</strong>${email}</p>
        <p><strong>message:</strong>${message}</p>
      ` 
    });

    res.status(200).json({success:true, respose});

  }catch(error){
    console.error(error);
    res.status(500).json({success:false, error});
  }
});

app.listen(5000,()=>{
  console.log("Server running on port 5000");
})
import busboy from 'busboy'
import {v2 as cloudinary} from 'cloudinary'
import { Request,Response, NextFunction } from "express";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const formData = (req: Request, res: Response, next: NextFunction) =>{
    let uploadFile=false
    let uploadCount= 0

    const done = () =>{
     if(uploadFile) return  
     if(uploadCount	>0) return
        next()
    }

    const bb = busboy ({headers: req.headers})
    req.body = {}

  

    bb.on('field', (key, val) =>{
        req.body[key]= val
    })

    bb.on('file', (key,stream) =>{
       uploadFile= true
       uploadCount ++

        const cloud =cloudinary.uploader.upload_stream(
        {upload_preset: 'hotel-booking-preset'},
        (err,res) =>{
        if (err) throw new Error('Error in the uploading')
        

        req.body[key]= res?.secure_url
        uploadFile=false
        uploadCount--
        done()
        })

        stream.on('data',(data) =>{
            cloud.write(data)
        })

        stream.on('end', () =>{
            cloud.end()
        })
    })

    bb.on('finish', () =>{
        done ()
    })

    req.pipe(bb)
}

import busboy from 'busboy'
import {v2 as cloudinary} from 'cloudinary'
import { Request,Response, NextFunction } from "express";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const formData = (req: Request, res: Response, next: NextFunction) =>{
    const bb = busboy ({headers: req.headers})
    req.body = {}

    const done = () =>{
        next()
    }

    bb.on('field', (key, val) =>{
        req.body[key]= val
    })

    bb.on('file', (key,stream) =>{
       
        const cloud =cloudinary.uploader.upload_stream(
        {upload_preset: 'hotel-booking-preset'},
       (err,res) =>{
        if (err) throw new Error('Error in the uploading')
        console.log('response', res)
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

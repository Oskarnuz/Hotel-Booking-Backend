import nodemailer, { TransportOptions }  from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const createGmailTransporter= () =>{
    const hostname=process.env.SMTP_SERVER
    const port= Number(process.env.SMTP_PORT) as Number
    const username= process.env.SMTP_USER
    const password= process.env.SMTP_PASSWORD

    const transporter = nodemailer.createTransport({
    host: hostname,
    port: port,
    secure: true,
    auth:{ 
        user: username,
        pass:password
    },
    logger:false
  } as TransportOptions)
  return transporter
}

export const sendNodeMailer = async (data: Mail.Options) =>{
    const transporter= createGmailTransporter()

    const info= await transporter.sendMail(data)

    return info
}
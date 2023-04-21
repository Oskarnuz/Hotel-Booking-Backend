export  const newsletterEmail= (user: any ) => {
  const styles= {
   container: "background: black; border:1p solid gray; color:white",
   title: "text-decoration: underline; "
  }
   const email= {
   from: 'deltabooking40@gmail.com',
   to:user.email,
   subject: 'Newsletter',
   html: `
   <div style="${styles.container}">
   <h1 style = "${styles.title}"> Las mejores reservas y actualiaciones solo para ti
   . Te notificaremos de nuevas noticias y/o promociones</p>
   </div>`
   ,
   text: "Notificación de noticias",
   attachments: [
       {
           filename: 'greetings.txt',
           content: 'Thank You'
       },
    ]
   }
   return email
  }
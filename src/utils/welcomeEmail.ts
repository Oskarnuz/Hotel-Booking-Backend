export  const welcomeEmail= (user: any ) => {
   const styles= {
    container: "background: black; border:1p solid gray; color:white",
    title: "text-decoration: underline; "
   }
   
    const email= {
    from: 'deltabooking40@gmail.com',
    to:user.email,
    subject: 'Welcome',
    html: `
    <div style="${styles.container}">
    <h1 style = "${styles.title}"> Bienvenido ${user.fullName} gracias por registrarte</h1>
        <p>Gracias por elegir a Delta Booking</p>
    </div>`
    ,
    text: `Bienvenido gracias por registrarte`,
    attachments: [
        {   
            filename: 'greetings.txt',
            content: 'Thank You'
        },
     ]
    }
    return email
   }
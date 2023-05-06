export const recoverEmail = (password: string, UserUpdated: any) => {
  const styles = {
    container:
      "background-color: #f7f7f7; border-radius: 10px; padding: 20px; font-family: sans-serif; font-size: 16px; line-height: 1.5em; color: #333;",
    title: "font-size: 24px; font-weight: bold; margin-bottom: 10px;",
    subtitle: "font-size: 18px; margin-bottom: 20px;",
    message: "margin-top: 30px;",
    button:
      "background-color: #007bff; color: #fff; border-radius: 5px; padding: 10px 20px; font-size: 16px; text-decoration: none;",
    buttonText: "color: #fff; text-decoration: none;",
    signature: "font-size: 14px; font-style: italic; margin-top: 30px;",
  };

  const email = {
    from: "Delta Booking <deltabooking40@gmail.com>",
    to: UserUpdated.email,
    subject: "Password Reset",
    html: `
      <div style="${styles.container}">
       <img src='https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/669c1d5973c6453cb43fa2e937c197fd28891652/src/assets/Icons/delta-black.svg'}} />  
      <h1 style="${styles.title}">You requested a change of password</h1>
        <p style="${styles.subtitle}"Here is your provisional password <strong>${password}</strong></p>
        <p style="${styles.message}">Please, make the change of your password as soon as possible in your profile settings</p>
        <p style="${styles.signature}">Best regards,<br/>The Delta Booking team</p>
      </div>
    `,
  };

  return email;
};

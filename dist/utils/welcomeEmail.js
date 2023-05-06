"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeEmail = void 0;
const welcomeEmail = (user) => {
    const styles = {
        container: "background-color: #f7f7f7; border-radius: 10px; padding: 20px; font-family: sans-serif; font-size: 16px; line-height: 1.5em; color: #333;",
        title: "font-size: 24px; font-weight: bold; margin-bottom: 10px;",
        subtitle: "font-size: 18px; margin-bottom: 20px;",
        message: "margin-top: 30px;",
        link: "display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; border-radius: 5px; text-decoration: none; margin-top: 20px;",
    };
    const email = {
        from: "Delta Booking <deltabooking40@gmail.com>",
        to: user.email,
        subject: "Welcome to Delta Booking",
        html: `
    <img src='https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/669c1d5973c6453cb43fa2e937c197fd28891652/src/assets/Icons/delta-black.svg'}} />   
    <div style="${styles.container}">
        <h1 style="${styles.title}">Welcome, ${user.fullName}!</h1>
        <p style="${styles.subtitle}">Thank you for choosing Delta Booking</p>
        <p style="${styles.message}">We are excited to have you on board! Our platform offers the best travel deals and experiences. You can now book your next adventure with ease.</p>
      </div>
    `,
        text: `Welcome, ${user.fullName}! Thank you for choosing Delta Booking.`,
    };
    return email;
};
exports.welcomeEmail = welcomeEmail;

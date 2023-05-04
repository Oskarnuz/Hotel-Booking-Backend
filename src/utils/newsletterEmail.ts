export const newsletterEmail = (mail: string) => {
  const styles = {
    container:
      "background: #f2f2f2; border: 1px solid #ddd; padding: 20px; font-family: sans-serif;",
    title:
      "font-size: 24px; font-weight: bold; margin-top: 0; margin-bottom: 20px;",
    subtitle: "font-size: 16px; margin-top: 0; margin-bottom: 20px;",
    text: "font-size: 14px; line-height: 1.5; margin-top: 0; margin-bottom: 20px;",
  };
  const email = {
    from: "Hotel Booking <deltabooking40@gmail.com>",
    to: mail,
    subject: "Newsletter Subscription",
    html: `
    <div style="${styles.container}">
     <img src='https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/669c1d5973c6453cb43fa2e937c197fd28891652/src/assets/Icons/delta-black.svg'}} />  
    <h1 style="${styles.title}">Subscribe to our Newsletter</h1>
      <p style="${styles.subtitle}">Get the latest updates on our hotel bookings and promotions straight to your inbox.</p>
      <p style="${styles.text}">Thank you for subscribing to our newsletter! You'll be the first to know about new hotel deals and other exciting promotions. If you have any questions or concerns, please don't hesitate to contact us.</p>
      <span style="${styles.text}">Here is your promo code: "Make It Real"</span>
      </div>`,
  };
  return email;
};

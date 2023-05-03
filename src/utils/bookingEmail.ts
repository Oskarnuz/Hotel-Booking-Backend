export const bookingEmail = (booking: any, user: any) => {
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
    to: user.email,
    subject: "Here is your reservation info",
    html: `
      <div style="${styles.container}">
        
      <h1 style="${styles.title}">Your booking for ${booking.HotelName} was successful!</h1>
        <p style="${styles.subtitle}">You chose the ${booking.RoomType} room for a stay from ${booking.CheckInDate} to ${booking.CheckOutDate} with ${booking.NumberOfGuest} guests.</p>
        <p style="${styles.message}">Please arrive on time for check-in and enjoy your stay!</p>
        <p style="${styles.signature}">Best regards,<br/>The Delta Booking team</p>
      </div>
    `,
  };

  return email;
};

import emailjs from 'emailjs-com';

export const sendEmail = async (userEmail, userMessage) => {
  const templateParams = {
    to_email: userEmail,
    from_name: 'Eduardo Martin',
    message: userMessage,
  };

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Correo enviado con éxito', response);
    return true;
  } catch (error) {
    console.error('Error al enviar el correo', error);
    return false;
  }
};

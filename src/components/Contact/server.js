const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia a tu proveedor de correo electrónico
  auth: {
    user: 'tucorreo@gmail.com', // Tu correo electrónico
    pass: 'tucontraseña' // Tu contraseña o token de aplicación
  }
});

app.post('/send', (req, res) => {
  const { name, lastname, email, phone, location, termsAccepted } = req.body;
  
  const mailOptions = {
    from: 'tucorreo@gmail.com', // Tu correo electrónico
    to: email, // Correo del destinatario, en este caso, el correo del usuario
    subject: 'Confirmación de envío de formulario',
    text: `Hola ${name}, hemos recibido tu mensaje. Aquí están los detalles:\nApellido: ${lastname}\nTeléfono: ${phone}\nUbicación: ${location}\nTérminos Aceptados: ${termsAccepted}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar correo:', error);
      res.status(500).send(error.message);
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).json(req.body);
    }
  });
  
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

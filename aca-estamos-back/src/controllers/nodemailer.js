const transporter = require("../helpers/mailer");
const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(  'src', 'views', 'MensajeCorreo' , 'mensajeCorreo.html');

try {
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    
    const nodemailer = async (req, res) => {
        const { email } = req.params;

        const result = await transporter.sendMail({
            from:  "acaestamos90@outlook.com",
            to: email,
            subject: "Mensaje de Contacto",
            html: htmlContent, // Usa el contenido HTML leído del archivo
        });

        
        res.status(200).json({ ok: true, message: "Código enviado con éxito" });
    };

    module.exports = nodemailer;
} catch (error) {
    console.error('Error al leer el archivo HTML:', error);
}

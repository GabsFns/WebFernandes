const express = require("express");
require('dotenv').config(); 
const nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// NodeMailer Process
/*const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS_APP
    }
});

app.post('/', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Mensagem de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail enviado com sucesso');
    });
});
*/
const connection = require("./Database/connection")
connection();

app.listen(5000, () => {
    console.log("Inicializando o Servidor na Porta: " + PORT)
});

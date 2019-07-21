import nodemailer from 'nodemailer'
import config from './data'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        ...config
    }
});
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mayurrrp29@gmail.com',
                pass: 'qnrf gzey qohw huru',
            },
        });

        const mailOptions = {
            from: email,
            to: 'mayurrrp29@gmail.com',
            subject: `New Inquiry from ${name}`,
            text: `You have received a new inquiry:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

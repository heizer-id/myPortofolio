import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const { name, email, message } = body

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Semua field harus diisi'
        })
    }

    const transporter = nodemailer.createTransport({
        host: config.mailHost as string,
        port: Number(config.mailPort),
        secure: Number(config.mailPort) === 465, // true for 465, false for other ports
        auth: {
            user: config.mailUser as string,
            pass: config.mailPassword as string
        }
    })

    try {
        await transporter.sendMail({
            from: `"${name}" <${config.mailUser}>`, // Sender address (must be authenticated user for Gmail)
            to: config.contactEmail as string, // Receiver address
            replyTo: email, // Reply to the user's email
            subject: `Pertanyaan Proyek: ${name}`,
            text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
            html: `
        <h3>Pertanyaan Proyek Baru</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        })

        return { success: true, message: 'Email berhasil dikirim!' }
    } catch (error: any) {
        console.error('Email sending failed:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Gagal mengirim email: ' + error.message
        })
    }
})

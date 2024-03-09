import emailjs from "@emailjs/browser"

const sendCustomEmail  = (details) => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY)
    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,

        {
            to_email: details.to_email,
            subject: details.subject,
            message: details.message,
        }
    )
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export { sendCustomEmail };
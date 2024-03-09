import emailjs from "@emailjs/browser"

const sendCustomEmail  = (details) => {
    emailjs.init(import.meta.env.EMAIL_USER_ID)
    emailjs.send(
        import.meta.env.EMAIL_SERVICE_ID,
        import.meta.env.EMAIL_TEMPLATE_ID,

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
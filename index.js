// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//   // prevent the form submit from refreshing the page
//     event.preventDefault()

//     const { name, email, message } = event.target
//     console.log('Name: ', name.value)
//     console.log('email: ', email.value)
//     console.log('Message: ', message.value)

// })


// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'victoremeto0@gmail.com',       // your email
//       pass: 'January-01'      // app password (not your main Gmail password)
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: 'your-email@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.send('Error sending message.');
//     } else {
//       console.log('Email sent:', info.response);
//       res.send('Message sent successfully!');
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });








// // server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Handle form submission
// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create mail transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'victoremeto0@gmail.com',        // Your Gmail
//       pass: 'your-app-password-here'       // Gmail App Password
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: 'your-email@gmail.com',            // Your receiving email
//     subject: 'New Contact Form Message',
//     text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.send('Error sending message.');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Message sent successfully!');
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });




// function sendEmail() {
//   sendEmail.send({
//     Host: "smtp.gmail.com",
//     Username: "victoremeto0@gmail.com",
//     Password: "January-01",
//     To: "emetovictorchibuike@gmail.com",
//     From: document.getElementById('email').value,
//     Subject: "New contact for enquire",
//     Body: "and this is the body",
//   }).then(
//     message => alert(message)
//   );
// }




function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_r02punt", "template_07h77of", parms).then(alert("E-mail Sent!!"))

}


window.addEventListener('load', () => {
      document.getElementById('myImage').classList.add('visible');
});




  const images = document.querySelectorAll('.fade-in-image');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images.forEach(image => observer.observe(image));





  const images2 = document.querySelectorAll('.fade-in-image2');

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images2.forEach(image => observer.observe(image));




  const images3 = document.querySelectorAll('.fade-in-image3');

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images3.forEach(image => observer.observe(image));


    const images4 = document.querySelectorAll('.fade-in-image4');

  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images4.forEach(image => observer.observe(image));

// document.getElementById("button").addEventListener("onClick", "sendMail()")
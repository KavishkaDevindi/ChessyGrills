function sendContactForm() {
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Validate form input values
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Create email body
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    // Send email (replace with your own email sending code)
    const emailSent = sendEmail("your-email@example.com", "Contact Form Submission", body);
    
    // Show success message if email was sent successfully
    if (emailSent) {
      alert("Thank you for your message. We'll get back to you soon.");
    } else {
      alert("There was an error sending your message. Please try again later.");
    }
  }
  
  function sendEmail(to, subject, body) {
 
    console.log(`Sending email to ${to} with subject "${subject}" and body:\n${body}`);
    return true;
  }

  
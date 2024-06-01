
import './contact.css'; 
import LinedIn from '../../assets/Linkedin.png';
import GitHub from '../../assets/Github.png';
import Instagram from '../../assets/instagram.png';


export const Contact = (props) => {
  
    const inputBackgroundColor = props.mode === 'dark' ? 'dark' : 'white';
    // Define the text color class based on the mode
    const textColorClass = props.mode === 'dark' ? 'lightText' : 'darkText';

   
  return (
    <section className="contact" id="contact-section">
        <div className="contactPage" id='contact-section'>
            <h1 className="contactTitle">Contact Me</h1>

            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities
            </span>
            {/* <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email'name='your_email'/>
                <textarea className='msg' name="message"  rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='send' className="submitBtn" onSubmit={sendEmail}>Submit</button>

                 */}


        <div className="formC">    

        <form className="contactForm" action="https://formspree.io/f/xzbnzapq" method="POST">
    
        <input className={`name ${textColorClass}`} style={{ backgroundColor: inputBackgroundColor }} placeholder='Your Name' type="text" name="name" id="name" required />
          <input className={`email ${textColorClass}`} style={{ backgroundColor: inputBackgroundColor }} type="email" placeholder='Your Email' name="email" id="email" required />
          <textarea className={`msg ${textColorClass}`} style={{ backgroundColor: inputBackgroundColor }} name="message" id="message" rows="5" placeholder='Your message' required />
          <button type="submit" className={`submitBtn ${textColorClass}`}>Submit</button>
          <div id="overlay"></div>
          </form>
          </div>
    
                <div className="links">
                    <a href="https://www.linkedin.com/in/aniket-jadhav-a72466236/" target='_blank' rel="noreferrer" > 
                        <img src={LinedIn} alt="LinkedIn" className="linkedin" />
                        </a>
                        <a href=" https://github.com/aniketjadhav25000" target='_blank' rel="noreferrer"> 
                        <img src={GitHub} alt="GitHub" className="github" />
                        </a>
                        <a href="https://www.instagram.com/aniket.j_2003?igsh=bGxzc3l2MnZvbTB1" target='_blank' rel="noreferrer"> 
                        <img src={Instagram} alt="Instagram" className="insta" />
                        </a>
                </div>
            
        </div>
    </section>
  )
}
export default Contact;



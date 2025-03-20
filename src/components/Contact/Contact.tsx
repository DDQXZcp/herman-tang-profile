import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you are interested in my background or skills, I'd love to connect!</p>
        <p>Feel free to reach out via email or mobile</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:u7436114@anu.edu.au"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:u7436114@anu.edu.au">u7436114@anu.edu.au</a>
        </div>
        <div>
        <a href="tel:+61 411937718"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+61 411937718">(+61) 411937718</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}
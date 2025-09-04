import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a className="logo">
        <h3>Acknowledgement</h3>
        <p>This profile page refers to the template</p>
        <a href="https://github.com/CodeVinayak/Portfolio-v2" target="_blank" rel="noreferrer" className="brand-link">
            Vinayak Portfolio
        </a>
      </a>
      {/* <div className="social-media">
        <a
          href="https://www.linkedin.com/in/herman-tang/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/DDQXZcp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div> */}
      <p>@ <span className="highlight">Herman Tang</span> 2025 all rights reserved</p>
    </Container>
  )
}

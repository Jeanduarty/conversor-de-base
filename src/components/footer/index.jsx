import './styles.css'
import email from './images/email.png'
import github from './images/github.png'
import instagram from './images/instagram.png'


export const FooterHome = () => (
    <div className='footer'>
        <div className='container-social'>
            <abbr title='instagram.com/jean_vduarte'><img src={instagram} className="imageInstagram" /></abbr>
            <abbr title='github.com/ggjean'><img src={github} className="imageGithub" /></abbr>
            <abbr title='jeanduarte322@gmail.com'><img src={email} className="imageEmail" /></abbr>
        </div>
    </div>
)
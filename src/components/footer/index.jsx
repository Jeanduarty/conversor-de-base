import './styles.css'
import email from './images/emailBranco.png'
import github from './images/githubBranco.png'
import instagram from './images/instagramBranco.png'


export const FooterHome = () => (
    <div className='footer'>
        <abbr title='instagram.com/jean_vduarte'><img src={instagram} className="imageInstagram" /></abbr>
        <abbr title='github.com/ggjean'><img src={github} className="imageGithub" /></abbr>
        <abbr title='jeanduarte322@gmail.com'><img src={email} className="imageEmail" /></abbr>
    </div>
)
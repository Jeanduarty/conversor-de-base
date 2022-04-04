import './styles.css'
import seta from './image/seta.png'

export const Converter = ({ onClick }) => (
    <button className='buttonConverter' onClick={onClick}>
        <abbr title='Clique para converter'><img src={seta} className="seta"/></abbr>
    </button>
)
import './styles.css'
import seta from './image/seta.png'

export const Converter = () => (
    <button className='buttonConverter'>
        <abbr title='Clique para converter'><img src={seta} className="seta" /></abbr>
    </button>
)
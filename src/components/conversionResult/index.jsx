import './styles.css'
import seta from './image/seta.png'

export const ConversionResult = ({ result, size,minHeight }) => (
    <>
        <button className='buttonConverter'>
            <img src={seta} className="seta" />
        </button>

        <div className='inputBorder'>
            <div className='result' style={{ fontSize: size, minHeight: minHeight }}>
                {result}
            </div>
        </div >
    </>
)
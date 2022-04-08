import './styles.css'

export const ConversionResult = ({ result, size }) => (
    <div className='inputBorder'>
        <div className='result' style={{ fontSize: size }}>
            {result}
        </div>
    </div >
)
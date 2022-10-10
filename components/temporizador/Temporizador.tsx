import { CountdownCircleTimer } from '../../node_modules/react-countdown-circle-timer/lib/index'
import styles from './temporizador.module.css'
interface TemporizadorProps {
    key:any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
          <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors={['#BCE596','#F7B801', '#ED827A']}
                colorsTime={[0.33,0.33,0.33]}
            >
                {({remainingTime})=>remainingTime}
            </CountdownCircleTimer>  
        </div>
    )
}
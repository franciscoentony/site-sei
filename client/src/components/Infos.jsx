import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Infos(props) {
  return (
    <div className="bg-white w-80 h-35 text-dark-green rounded-3xl flex items-center justify-evenly shadow-2xl">
        <FontAwesomeIcon icon={props.icon} size="3x"/>
        <div className="">
            <span className="font-extrabold text-5xl">{props.number}</span>
            <p className="font-medium text-xl w-30">{props.text}</p>
        </div>
    </div>
  )
}
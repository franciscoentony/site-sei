import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function VerMais(props) {
  return (
    <div className='vermais'>
        <Link to={props.link} className="font-semibold text-green-800 hover:text-green-600 duration-300">
            Ver mais
            <FontAwesomeIcon icon={faChevronRight} />
        </Link>
    </div>
  )
}
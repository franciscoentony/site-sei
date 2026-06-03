import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function CardEventos(props) {
  return (
    <div className="w-full flex justify-center h-auto max-h-125">
      {/* Card */}
      <Link to="#" className="relative w-full h-full group cursor-pointer">
        {/* Imagem/banner */}
        <div className="h-50 rounded-2xl overflow-hidden">
          <img
            src={props.banner}
            alt="banner"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradiente */}
          <div className="overlay w-full h-50 rounded-2xl absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
            <div className="infos text-white w-full flex items-end justify-between p-2">
              <div className="icones flex items-center gap-1 mb-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="bg-white text-dark-green font-semibold text-xs w-auto p-1 rounded-sm uppercase">
                  {props.locale}
                </span>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <span className="font-semibold">{props.peaples}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <span className="font-semibold text-2xl w-full text-start text-dark-green group-hover:text-[#3dab57] duration-300 ease-in-out line-clamp-2">
            {props.title}
          </span>
          <p className="text-dark-green line-clamp-3">{props.description}</p>
          <span className="text-stone-400 text-sm font-medium">{props.category} - {props.date}</span>
        </div>
      </Link>
    </div>
  );
}

import { faCalendar, faImage } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardInst({ date, title, description, status }) {
  return (
    <div
      className="bg-[#102613] text-white rounded-3xl overflow-hidden border border-emerald-950 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out flex flex-col justify-between"
    >
      <div className="p-5 space-y-4">
        {/* Placeholder de Imagem */}
        <div className="w-full h-40 bg-neutral-500/30 rounded-xl flex items-center justify-center border border-neutral-700/20 shadow-inner group">
          <FontAwesomeIcon icon={faImage} className="fas fa-image text-3xl text-neutral-400/40 group-hover:scale-110 duration-200 ease-in-out transition-transform" />
        </div>

        {/* Info Básica */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs font-medium text-emerald-300">
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendar}/> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faMapMarkerAlt}/> Canguaretama
            </span>
          </div>
          <h4 className="text-lg font-bold tracking-tight line-clamp-1 text-white hover:text-emerald-300 transition-colors cursor-pointer">
            {title}
          </h4>
          <p className="text-xs text-neutral-300/80 leading-relaxed line-clamp-3 font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Footer do Card com o Status Tracker Visual */}
      <div className="px-5 pb-5 pt-2 border-t border-emerald-950/40 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400">Status institucional</span>
          <span
            className={`px-2 py-0.5 rounded-md font-semibold text-[10px] uppercase ${
              status === "Em andamento"
                ? "bg-emerald-500/20 text-emerald-300"
                : status === "Concluídos"
                  ? "bg-[#44ba6a]/20 text-[#44ba6a]"
                  : "bg-neutral-500/20 text-neutral-300"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="w-full h-1 bg-emerald-950 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${
              status === "Em andamento"
                ? "w-2/3 bg-emerald-400"
                : status === "Concluídos"
                  ? "w-full bg-[#44ba6a]"
                  : "w-1/4 bg-neutral-400"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

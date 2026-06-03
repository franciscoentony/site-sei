import { Link } from "react-router-dom";
export default function ButtonLink(props) {
  return (
    <div className='botao-entrar'>
         <Link
              to={props.link}
              className="bg-strong-green hover:bg-green-700 duration-400 font-semibold w-40 h-12 p-5 flex justify-center items-center rounded-xl hover:scale-110"
            >
              {props.text}
            </Link>
    </div>
  )
}
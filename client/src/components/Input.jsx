import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input(props) {
  return (
    <div className="flex flex-col w-full">
          <label htmlFor="" className='text-start font-semibold mb-1'>{props.label}</label>
          <div className="bg-gray-100 border border-gray-300 flex justify-start items-center w-full h-13 rounded-xl px-3 gap-2">
            <FontAwesomeIcon icon={props.icon} className='text-stone-400 shrink-0' size='lg'/>
            <input type={props.type} className='p-2 flex-1 h-11 font-medium outline-none bg-transparent' placeholder={props.placeholder}/>
          </div>
    </div>
  )
}
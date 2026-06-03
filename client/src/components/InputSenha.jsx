import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'

export default function InputSenha(props) {
    const [botaoMostarSenha, setBotaoMostrarSenha] = useState(false);
    const [password, setPassword] = useState("")

    function mostrarSenha() {
        setBotaoMostrarSenha((s) => !s)
    }
  return (
    <div className="flex flex-col w-full">
          <label htmlFor="" className='text-start font-semibold mb-1'>{props.text}</label>
          <div className="bg-gray-100 border border-gray-300 flex justify-between items-center w-full h-13 rounded-xl px-3">
            <div className="flex items-center flex-1 gap-2">
                <FontAwesomeIcon icon={faLock} className='text-stone-400 shrink-0' size='lg'/>
                <input type={botaoMostarSenha ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 flex-1 h-11 font-medium outline-none bg-transparent' placeholder="••••••" />
            </div>
            {password.length > 0 &&(
                <button type='button' className='w-11 h-10 cursor-pointer mr-2 duration-200 rounded-full hover:bg-gray-300 flex items-center justify-center shrink-0' onClick={mostrarSenha}>
                    {botaoMostarSenha === false ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}     
                </button>
            )}
          </div>
    </div>
  )
}
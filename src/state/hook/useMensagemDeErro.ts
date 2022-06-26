import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMensagemDeErro = () => {
    const mensagemErro = useRecoilValue(erroState)
    
    return mensagemErro
}
import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useMensagemDeErro = () => {
    const mensagemErro = useRecoilValue(erroState)
    
    return mensagemErro
}
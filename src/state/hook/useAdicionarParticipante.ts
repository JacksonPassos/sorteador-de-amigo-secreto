import { useSetRecoilState } from "recoil"
import { listaParticipantesState } from "../atom"

export const userAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    
    return (nomeDoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}
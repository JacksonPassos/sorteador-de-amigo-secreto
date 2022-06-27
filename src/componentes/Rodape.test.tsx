import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Rodape from './Rodape'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNevagecao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNevagecao
    }
})
jest.mock('../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })

})
describe('quando existem participantes suficientes', () => {
    const participantes = ['Ana', 'Catarina', 'Marina']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a brincadeira deve ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNevagecao).toHaveBeenCalledTimes(1)
        expect(mockNevagecao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
        
    })

})
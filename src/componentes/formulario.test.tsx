import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Formulario from './formulario'

test('quando o input estar vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    // Encontrar o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // encontrar o botão
    const botao = screen.getByRole('button')
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
    
})

test('adicionar um participante caso exista um nome preenchido', () =>{
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    // inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Nome do participante John Doe'
        }
    })
    // clicar no botão de submeter
    fireEvent.click(botao)
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()
    // garantir que o input não tenha um valor 
    expect(input).toHaveValue("")

})
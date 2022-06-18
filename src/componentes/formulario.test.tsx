import React from 'react'
import { render, screen } from '@testing-library/react'
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
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RandomMovie from '../src/components/RandomMovie';
import api from '../src/services/api';

// Mock del módulo api
jest.mock('../src/services/api', () => ({
  get: jest.fn()
}));

describe('RandomMovie Component', () => {
  const mockMovie = {
    id: 1,
    title: 'Test Movie',
    overview: 'Test Overview'
  };

  const mockOnSelectMovie = jest.fn();

  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  test('displays loading state initially', () => {
    render(<RandomMovie onSelectMovie={mockOnSelectMovie} />);
    expect(screen.getByText(/loading a random movie/i)).toBeInTheDocument();
  });

  test('fetches and displays random movie on mount', async () => {
    api.get.mockResolvedValueOnce({
      data: {
        results: [mockMovie]
      }
    });

    render(<RandomMovie onSelectMovie={mockOnSelectMovie} />);

    expect(api.get).toHaveBeenCalledWith('/discover/movie', expect.any(Object));

    await waitFor(() => {
      expect(screen.getByText(/load another movie/i)).toBeInTheDocument();
    });

    expect(mockOnSelectMovie).toHaveBeenCalledWith(mockMovie);
  });

  test('loads new movie when button is clicked', async () => {
    const secondMockMovie = {
      id: 2,
      title: 'Second Test Movie',
      overview: 'Second Test Overview'
    };

    api.get
      .mockResolvedValueOnce({
        data: {
          results: [mockMovie]
        }
      })
      .mockResolvedValueOnce({
        data: {
          results: [secondMockMovie]
        }
      });

    render(<RandomMovie onSelectMovie={mockOnSelectMovie} />);

    await waitFor(() => {
      expect(screen.getByText(/load another movie/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/load another movie/i));

    expect(screen.getByText(/loading a random movie/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/load another movie/i)).toBeInTheDocument();
    });

    expect(mockOnSelectMovie).toHaveBeenCalledWith(secondMockMovie);
  });

  test('handles API error gracefully', async () => {
    api.get.mockRejectedValueOnce(new Error('API Error'));
  
    render(<RandomMovie onSelectMovie={mockOnSelectMovie} />);
  
    // Esperamos que se muestre el estado de carga inicialmente
    expect(screen.getByText(/loading a random movie/i)).toBeInTheDocument();
  
    await waitFor(() => {
      // Verificamos que el mensaje de error esté presente
      expect(screen.getByText(/failed to load a random movie/i)).toBeInTheDocument();
    });
  
    // Verificamos que el botón "Try Again" esté disponible
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });
  


});
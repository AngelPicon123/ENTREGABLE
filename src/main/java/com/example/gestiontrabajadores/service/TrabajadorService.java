package com.example.gestiontrabajadores.service;

import com.example.gestiontrabajadores.model.Trabajador;

import java.util.List;

public interface TrabajadorService {
    List<Trabajador> getAllTrabajadores();
    Trabajador getTrabajadorById(Long id);
    Trabajador saveTrabajador(Trabajador trabajador);
    Trabajador updateTrabajador(Long id, Trabajador trabajador);
    void deleteTrabajador(Long id);
}

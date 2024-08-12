package com.example.gestiontrabajadores.service;

import com.example.gestiontrabajadores.model.Trabajador;
import com.example.gestiontrabajadores.repository.TrabajadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrabajadorServiceImpl implements TrabajadorService{
    @Autowired
    private TrabajadorRepository trabajadorRepository;

    @Override
    public List<Trabajador> getAllTrabajadores() {
        return trabajadorRepository.findAll();
    }

    @Override
    public Trabajador getTrabajadorById(Long id) {
        return trabajadorRepository.findById(id).orElse(null);
    }

    @Override
    public Trabajador saveTrabajador(Trabajador trabajador) {
        return trabajadorRepository.save(trabajador);
    }

    @Override
    public Trabajador updateTrabajador(Long id, Trabajador trabajador) {
        Trabajador existingTrabajador = trabajadorRepository.findById(id).orElse(null);
        if (existingTrabajador != null) {
            existingTrabajador.setNombre(trabajador.getNombre());
            existingTrabajador.setApellido(trabajador.getApellido());
            existingTrabajador.setCargo(trabajador.getCargo());
            existingTrabajador.setSalario(trabajador.getSalario());
            return trabajadorRepository.save(existingTrabajador);
        }
        return null;
    }

    @Override
    public void deleteTrabajador(Long id) {
        trabajadorRepository.deleteById(id);
    }
}

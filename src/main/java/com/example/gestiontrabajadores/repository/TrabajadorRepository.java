package com.example.gestiontrabajadores.repository;

import com.example.gestiontrabajadores.model.Trabajador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TrabajadorRepository extends JpaRepository<Trabajador,Long> {
}

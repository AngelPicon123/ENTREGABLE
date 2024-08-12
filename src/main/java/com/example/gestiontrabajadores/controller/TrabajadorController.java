package com.example.gestiontrabajadores.controller;

import com.example.gestiontrabajadores.model.Trabajador;
import com.example.gestiontrabajadores.service.TrabajadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trabajadores")
//comunicacion con el reac
@CrossOrigin(origins = "http://localhost:3004")
public class TrabajadorController {
    @Autowired
    private TrabajadorService trabajadorService;

    @GetMapping
    public ResponseEntity<List<Trabajador>> getAllTrabajadores() {
        return new ResponseEntity<>(trabajadorService.getAllTrabajadores(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trabajador> getTrabajadorById(@PathVariable Long id) {
        Trabajador trabajador = trabajadorService.getTrabajadorById(id);
        return trabajador != null ? new ResponseEntity<>(trabajador, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Trabajador> createTrabajador(@RequestBody Trabajador trabajador) {
        return new ResponseEntity<>(trabajadorService.saveTrabajador(trabajador), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Trabajador> updateTrabajador(@PathVariable Long id, @RequestBody Trabajador trabajador) {
        Trabajador updatedTrabajador = trabajadorService.updateTrabajador(id, trabajador);
        return updatedTrabajador != null ? new ResponseEntity<>(updatedTrabajador, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrabajador(@PathVariable Long id) {
        trabajadorService.deleteTrabajador(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

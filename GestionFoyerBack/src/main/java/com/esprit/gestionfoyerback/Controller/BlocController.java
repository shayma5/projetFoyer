package com.esprit.gestionfoyerback.Controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.esprit.gestionfoyerback.dto.AddBlocRequest;
import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.FoyerRepo;
import com.esprit.gestionfoyerback.Service.BlocService;
import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.dto.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/bloc")
@RequiredArgsConstructor
@RestController
public class BlocController {
    private final BlocRepo blocRepositorie;
    private final BlocService blocService;


    @PutMapping("/update/{idBloc}")
    public Bloc updateFoyer(@PathVariable long idBloc,@RequestBody AddBlocRequest bloc) {
        return blocService.updateBloc(idBloc,bloc);
    }


    @GetMapping("/blocs")
    public List<BlocDto> getAllBlocs() {
        List<Bloc> blocs = blocRepositorie.findAll();
        List<BlocDto> blocDtos = new ArrayList<>();

        for (Bloc bloc : blocs) {
            BlocDto blocDto = new BlocDto();
            blocDto.setIdBloc(bloc.getIdBloc());
            blocDto.setNomBloc(bloc.getNomBloc());
            blocDto.setCapaciteBloc(bloc.getCapaciteBloc());
            blocDto.setNomFoyer(bloc.getFoyer().getNomFoyer()); // Assuming Foyer has a 'name' property

            blocDtos.add(blocDto);
        }

        return blocDtos;
    }

    @GetMapping("/getId/{idBloc}")
    public Bloc getId(@PathVariable long idBloc) {
        return blocService.findBlocById(idBloc);
    }

    @DeleteMapping("/delete/{idBloc}")
    public ResponseEntity<String> deleteFoyer(@PathVariable long idBloc) {
        try {
            Bloc bloc = blocService.findBlocById(idBloc);
            if (bloc != null) {
                blocService.deleteBlocById(idBloc);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions with a 500 Internal Server Error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/foyers/addBloc")
    public ResponseEntity<String> addBlocToFoyer(@RequestBody AddBlocRequest request) {
        blocService.addBlocToFoyer(request);
        return ResponseEntity.ok("Bloc added to Foyer successfully");
    }


    private final FoyerRepo foyerRepository;
    @GetMapping("/foyernames")
    public List<String> getFoyerNames() {
        List<Foyer> foyers = foyerRepository.findAll();
        return foyers.stream()
                .map(Foyer::getNomFoyer)
                .collect(Collectors.toList());
    }

    @GetMapping("/foyer/{foyerId}")
    public List<Bloc> getBlocksByFoyer(@PathVariable Long foyerId) {
        return blocService.getBlocksByFoyer(foyerId);
    }
}

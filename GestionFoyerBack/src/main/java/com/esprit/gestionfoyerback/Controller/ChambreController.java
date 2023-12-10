package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.ChambreRepo;
import com.esprit.gestionfoyerback.Service.ChambreService;
import com.esprit.gestionfoyerback.dto.AddChambreDto;
import com.esprit.gestionfoyerback.dto.ChambreDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/chambre")
@RequiredArgsConstructor
@RestController
public class ChambreController {
    private final ChambreService chambreService;

    @PostMapping("/new/bloc")
    public ResponseEntity<String> addChambreToBloc(@RequestBody AddChambreDto chambre) {
        chambreService.addChambreToBloc(chambre);
        return ResponseEntity.ok("chambre added to bloc successfully");
    }

    private final ChambreRepo chambreRepositorie;
    @GetMapping("/chambres")
    public List<ChambreDto> getAllchambres() {
        List<Chambre> chambres = chambreRepositorie.findAll();
        List<ChambreDto> chambreDtos = new ArrayList<>();

        for (Chambre chambre : chambres) {
            ChambreDto chambreDto = new ChambreDto();
            chambreDto.setIdChambre(chambre.getIdChambre());
            chambreDto.setNumeroChambre(chambre.getNumeroChambre());
            chambreDto.setTypeC(chambre.getTypeC());
            chambreDto.setNomBloc(chambre.getBlocs().getNomBloc());


            chambreDtos.add(chambreDto);
        }

        return chambreDtos;
    }

    private final BlocRepo blocRepositorie;
    @GetMapping("/blocnames")
    public List<String> getBlocNames() {
        List<Bloc> blocs = blocRepositorie.findAll();
        return blocs.stream()
                .map(Bloc::getNomBloc)
                .collect(Collectors.toList());
    }


    @PutMapping("/update/{idChambre}")
    public Chambre updateChambre(@PathVariable long idChambre,@RequestBody AddChambreDto chambre) {
        return chambreService.updateChambre(idChambre,chambre);
    }

    @GetMapping("/getId/{idChambre}")
    public Chambre getId(@PathVariable long idChambre) {
        return chambreService.findChambreById(idChambre);
    }

    @DeleteMapping("/delete/{idChambre}")
    public ResponseEntity<String> deletechambre(@PathVariable long idChambre) {
        try {
            Chambre chambre = chambreService.findChambreById(idChambre);
            if ( chambre != null) {
                chambreService.deleteChambreById(idChambre);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions with a 500 Internal Server Error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/bloc/{blockId}")
    public List<Chambre> getRoomsByBlock(@PathVariable Long blockId) {
        return chambreService.getChambresByBloc(blockId);
    }
}

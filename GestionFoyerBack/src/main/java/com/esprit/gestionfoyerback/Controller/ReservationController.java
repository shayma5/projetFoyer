package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservation")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping
    public List<Reservation> retrieveAllReservation(){
        return reservationService.retrieveAllReservation();
    }

    @GetMapping("{idReservation}")
    public Reservation retrieveReservation(@PathVariable long idReservation){
        return reservationService.retrieveReservation(idReservation);
    }

    @PutMapping
    public Reservation updateReservation(@RequestBody Reservation reservation){
        return reservationService.updateReservation(reservation);
    }

    @PostMapping("/addReservation/{idChambre}/{cin}")
    public Reservation ajouterReservation(@PathVariable Long idChambre, @PathVariable Long cin) {
        return reservationService.ajouterReservation(idChambre, cin);
    }

    @PutMapping("/annulerReservation/{cin}")
    public Reservation annulerReservation(@PathVariable Long cin) {
        return reservationService.annulerReservation(cin);
    }
}

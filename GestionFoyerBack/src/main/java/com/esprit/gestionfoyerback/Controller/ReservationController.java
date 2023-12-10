package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservation")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping("/{cin}")
    public ResponseEntity<List<Reservation>> getReservationsForCurrentUser(@PathVariable long cin) {
        List<Reservation> reservations = reservationService.getReservationsForCurrentUser(cin);
        return ResponseEntity.ok(reservations);
    }

    @GetMapping("/getAll")
    public List<Reservation> getAllReservation() {
        return reservationService.findAllReservation();

    }

    @PutMapping("/adduniversitychambrebloc/{idChambre}/{cinEtudiant}")
    public Reservation addReservationn(@PathVariable("idChambre") long idChambre, @PathVariable("cinEtudiant") long cinEtudiant) {
        Reservation rv = reservationService.ajouterReservation(idChambre, cinEtudiant);
        return rv;

    }

    @GetMapping("/getId/{idReservation}")
    public Reservation getId(@PathVariable String idReservation) {
        return reservationService.findReservationById(idReservation);
    }

    @DeleteMapping("/delete/{idReservation}")
    public ResponseEntity<String> deleteReservation(@PathVariable String idReservation) {
        try {
            Reservation reservation = reservationService.findReservationById(idReservation);
            if ( reservation != null) {
                reservationService.deleteReservationById(idReservation);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions with a 500 Internal Server Error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/annulerReservation/{cin}")
    public Reservation annulerReservation(@PathVariable Long cin) {
        return reservationService.annulerReservation(cin);
    }
}

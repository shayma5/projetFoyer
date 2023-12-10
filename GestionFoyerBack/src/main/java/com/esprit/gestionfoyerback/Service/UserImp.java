package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserImp implements UserService{
    private final UserRepo userRepo;

    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService(){
            @Override
            public UserDetails loadUserByUsername(String s) {
                return (UserDetails) userRepo.findByEmail(s).orElseThrow(() -> new RuntimeException("User not found"));
            }
        };
    }
}

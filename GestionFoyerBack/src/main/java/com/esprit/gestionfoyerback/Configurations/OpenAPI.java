package com.esprit.gestionfoyerback.Configurations;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Ons Khiari",
                        email = "ons.khiari@esprit.tn"
                ),
                title = "Gestion Foyer",
                version = "1.0.0",
                description = "SWAGGER : Gestion Foyer"
        )
)
public class OpenAPI {
}

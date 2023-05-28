package ma.enset.authservice.security.dtos;

import ma.enset.authservice.security.enums.Gender;

public record RegistrationRequestDTO(String username, String firstName, String lastName, String email, String password, String confirmPassword, Gender gender) {
}

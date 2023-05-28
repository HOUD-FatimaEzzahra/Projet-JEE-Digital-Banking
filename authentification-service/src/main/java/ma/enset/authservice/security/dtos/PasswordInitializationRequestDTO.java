package ma.enset.authservice.security.dtos;
public record PasswordInitializationRequestDTO(
        String password, String confirmPassword,
        String authorizationCode, String email
){ }

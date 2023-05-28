package ma.enset.authservice.security.dtos;

public record ChangePasswordRequestDTO(
        String currentPassword,
        String newPassword,
        String confirmPassword
) {
}

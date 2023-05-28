package ma.enset.authservice.security.dtos;

public record RemoveRoleFromUserDTO(
        String roleName, String username
) {
}

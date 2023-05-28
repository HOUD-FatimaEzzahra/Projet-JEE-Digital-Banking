package ma.enset.authservice.security.dtos;

public record RequestForRoleToUserDTO(
        String roleName, String username
) {
}

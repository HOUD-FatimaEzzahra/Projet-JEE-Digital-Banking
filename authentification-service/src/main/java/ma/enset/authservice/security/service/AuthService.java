package ma.enset.authservice.security.service;

import ma.enset.authservice.security.dtos.ChangePasswordRequestDTO;
import ma.enset.authservice.security.dtos.PasswordInitializationRequestDTO;
import ma.enset.authservice.security.dtos.RegistrationRequestDTO;
import ma.enset.authservice.security.enums.AccountStatus;
import ma.enset.authservice.security.dtos.UserDetailsRequestDTO;
import ma.enset.authservice.security.entities.AppRole;
import ma.enset.authservice.security.entities.AppUser;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface AuthService {

    AppUser addUser(String username, String email, String password, String repassword, boolean emailVerified, AccountStatus status);

    AppUser updateUserDetails(UserDetailsRequestDTO request);

    AppRole addRole(String roleName);
    AppRole addRoleToUser(String username, String roleName, boolean deleteRequestedRole);
    AppRole removeRoleFromUser(String username, String roleName);
    AppUser findUserByUsername(String username);
    AppUser findUserByUserId(String userId);
    AppUser findUserByUsernameOrEmail(String usernameOrEmail);

    boolean isUsernameAvailable(String username);

    Map<String,String> generateToken(String username, boolean generateRefreshToken);

    AppUser updatePhotoProfile(MultipartFile photoFile, String userId, String baseURL) throws IOException;

    AppUser register(RegistrationRequestDTO requestDTO, boolean activate);

    void verifyEmail(String userId);

    String emailActivation(String token);

    void sendActivationCode(String email);

    void authorizePasswordInitialization(String authorizationCode, String email);

    void passwordInitialization(PasswordInitializationRequestDTO request);

    List<AppRole> getAllRoles();

    List<AppUser> getAllUsers();

    void deleteRole(Long id);

    void changePassword(ChangePasswordRequestDTO request, String name);

    boolean isEmailAvailable(String email);

    AppUser activateAccount(boolean value, String userId);

    List<AppUser> searchUsers(String keyWord);

    AppRole requestForRoleToUserAttribution(String username, String roleName);
}

package ma.enset.authservice.security.repo;
import ma.enset.authservice.security.entities.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<AppRole,Long> {
    AppRole findByRoleName(String roleName);
}

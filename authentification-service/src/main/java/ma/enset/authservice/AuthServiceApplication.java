package ma.enset.authservice;

import ma.enset.authservice.security.config.JwtTokenParams;
import ma.enset.authservice.security.config.RsaKeyConfig;
import ma.enset.authservice.security.dtos.RegistrationRequestDTO;
import ma.enset.authservice.security.enums.Gender;
import ma.enset.authservice.security.service.AuthService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@EnableConfigurationProperties({RsaKeyConfig.class, JwtTokenParams.class})
public class AuthServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    //@Bean
    CommandLineRunner commandLineRunner(AuthService authService){
        return args -> {
            authService.addRole("USER");
            authService.addRole("ADMIN");
            authService.register(new RegistrationRequestDTO("admin","Fatiza","Houd","f.houd@enset-media.ac.ma","password","password", Gender.FEMALE),true);
            authService.addRoleToUser("admin","ADMIN", false);
        };
    }
}

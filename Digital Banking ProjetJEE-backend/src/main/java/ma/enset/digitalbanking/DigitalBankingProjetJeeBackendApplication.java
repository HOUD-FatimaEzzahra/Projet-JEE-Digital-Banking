package ma.enset.digitalbanking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DigitalBankingProjetJeeBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(DigitalBankingProjetJeeBackendApplication.class, args);
    }

/*    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }*/
}

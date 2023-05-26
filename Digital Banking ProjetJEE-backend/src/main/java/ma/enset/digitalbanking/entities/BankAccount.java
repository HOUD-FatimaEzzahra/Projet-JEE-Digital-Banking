package ma.enset.digitalbanking.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.digitalbanking.dtos.*;
import ma.enset.digitalbanking.entities.*;
import ma.enset.digitalbanking.enums.AccountStatus;
import ma.enset.digitalbanking.enums.OperationType;
import ma.enset.digitalbanking.exceptions.*;
import ma.enset.digitalbanking.mappers.*;
import ma.enset.digitalbanking.repositories.*;
import java.util.Date;

import java.util.Date;
import java.util.List;
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(name = "TYPE",length = 4)
@Data @NoArgsConstructor @AllArgsConstructor
public abstract class BankAccount {
    @Id
    private String id;
    private double balance;
    private Date createdAt;
    @Enumerated(EnumType.STRING)
    private AccountStatus status;
    @ManyToOne
    private Customer customer;

    @OneToMany(mappedBy = "bankAccount",fetch = FetchType.LAZY)
    private List<AccountOperation> accountOperations;
}

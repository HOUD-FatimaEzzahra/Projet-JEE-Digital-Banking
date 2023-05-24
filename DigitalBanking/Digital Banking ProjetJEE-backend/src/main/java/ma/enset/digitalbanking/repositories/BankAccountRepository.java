package ma.enset.digitalbanking.repositories;

import ma.enset.digitalbanking.entities.Account;
import ma.enset.digitalbanking.entities.Operation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<Account,String> {
    Page<Operation> findByBankAccountIdOrderByOperationDateDesc(String accountId, PageRequest of);

    List<Operation> findByBankAccountId(String accountId);
}

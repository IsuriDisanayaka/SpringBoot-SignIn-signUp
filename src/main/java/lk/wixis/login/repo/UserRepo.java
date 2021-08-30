package lk.wixis.login.repo;

import lk.wixis.login.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
public interface UserRepo extends JpaRepository <User,String> {
    Optional<User> findByEmailEquals(String id);
}

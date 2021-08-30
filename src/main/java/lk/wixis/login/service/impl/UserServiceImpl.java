package lk.wixis.login.service.impl;

import lk.wixis.login.dto.UserDTO;
import lk.wixis.login.entity.User;
import lk.wixis.login.exception.ValidateException;
import lk.wixis.login.repo.UserRepo;
import lk.wixis.login.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper mapper;
    @Override
    public void addUser(UserDTO dto) {
        if (userRepo.existsById(dto.getId())) {
            throw new ValidateException("Customer Already Exist");
        }
       userRepo.save(mapper.map(dto, User.class));
    }

    @Override
    public boolean checkPassword(UserDTO dto) {
        Optional<User> user =userRepo.findByEmailEquals(dto.getEmail());
        if (user.isPresent()) {
            return (user.get().getEmail() .equals(dto.getEmail()) ) && (user.get().getPassword().equals(dto.getPassword() ));
        }

        return false;
    }
}


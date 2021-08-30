package lk.wixis.login.service;

import lk.wixis.login.dto.UserDTO;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
public interface UserService {
    void addUser(UserDTO dto);

    boolean checkPassword(UserDTO dto);
}

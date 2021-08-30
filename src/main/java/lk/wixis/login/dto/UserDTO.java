package lk.wixis.login.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String address;
    private double salary;
    private String password;
}

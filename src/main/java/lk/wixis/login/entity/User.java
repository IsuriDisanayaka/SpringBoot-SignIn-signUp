package lk.wixis.login.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String address;
    private double salary;
    private String password;
}

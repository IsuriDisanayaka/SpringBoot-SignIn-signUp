package lk.wixis.login.controller;

import lk.wixis.login.dto.UserDTO;
import lk.wixis.login.exception.NotFoundException;
import lk.wixis.login.service.UserService;
import lk.wixis.login.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Isuri Disanayaka
 * @date:16/08/2021
 * @since : 0.0.1
 **/
@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
     @Autowired
    private UserService service;

    @PostMapping(path= "/save")

    public ResponseEntity saveCustomer(@RequestBody UserDTO dto) {
        if (dto.getId().trim().length() <= 0) {
            throw new NotFoundException("Customer id cannot be empty");
        }
        service.addUser(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }
//    @GetMapping(path="/get")
//    @ResponseBody
//    public String test(){
//        System.out.println("hiii");
//       return "hi";
//    }
    @PostMapping(path = "/check")
    public ResponseEntity checkPassword(@RequestBody UserDTO dto) {
        boolean result = service.checkPassword(dto);
        return new ResponseEntity(new StandradResponse("200", "Done", result), HttpStatus.OK);
    }
}

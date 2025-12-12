import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        if (repo.findByEmail(user.getEmail()) != null) {
            return "Email Already Registered!";
        }

        repo.save(user);
        return "User Registered Successfully!";
    }

    @PostMapping("/login")
    public Object login(@RequestBody User user) {

        User u = repo.findByEmailAndPassword(user.getEmail(), user.getPassword());

        if (u == null) {
            return "Invalid Email or Password!";
        }

        return u;
    }
}

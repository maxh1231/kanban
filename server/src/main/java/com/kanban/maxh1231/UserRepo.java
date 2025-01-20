package com.kanban.maxh1231;
import org.springframework.data.repository.CrudRepository;
import com.kanban.maxh1231.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
public interface UserRepo extends CrudRepository<User, Integer> {

}

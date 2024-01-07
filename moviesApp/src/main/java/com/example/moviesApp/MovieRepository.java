package com.example.moviesApp;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    
    // By naming this method in this convention, spring boot understands what field we are accessing
    // When we create the @Autowired instance of MovieRepository, then spring boot will implement this
    // mthd accordingly.
    Optional<Movie> findMovieByImdbId(String imdbId);
}

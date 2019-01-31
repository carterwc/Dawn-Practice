CREATE DATABASE IF NOT EXISTS mooovies;

USE mooovies;

CREATE TABLE movies (
  id INT(11) NOT NULL AUTO_INCREMENT,
  Title VARCHAR(255) NOT NULL,
  releaseDate INT(11),
  movieGenre VARCHAR(255),
  PRIMARY KEY(id)
);


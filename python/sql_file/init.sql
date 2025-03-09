DROP TABLE IF EXISTS critique;
DROP TABLE IF EXISTS attraction;
DROP TABLE IF EXISTS users;

CREATE TABLE attraction (
    attraction_id INT AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    difficulte INT,
    visible TINYINT(1) DEFAULT 1,
    PRIMARY KEY (attraction_id)
);

CREATE TABLE users (
    users_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (users_id)
);

CREATE TABLE critique (
    critique_id INT AUTO_INCREMENT,
    name  VARCHAR(255) DEFAULT NULL,
    prenom  VARCHAR(255) DEFAULT NULL, 
    texte VARCHAR(255) NOT NULL,
    note INT CHECK (note BETWEEN 0 AND 5),
    attraction_id INT NOT NULL,
    PRIMARY KEY (critique_id),
    FOREIGN KEY (attraction_id) REFERENCES attraction(attraction_id) ON DELETE CASCADE
);
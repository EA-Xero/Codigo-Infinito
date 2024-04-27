Create database users;

\c users;

CREATE TABLE usuarios (
    nombre varchar(255) NOT NULL,
    apellido  varchar(255) NOT NULL,
    email varchar(255) NOT NULL PRIMARY KEY ,
    password varchar(500) NOT NULL,
    telefono varchar(255) NOT NULL,
    pais varchar(255) NOT NULL,
    direccion varchar(255) NOT NULL,
    rol varchar(50) 
);

INSERT INTO usuarios (nombre, apellido, email, password, telefono, pais, direccion, rol) values ('Edgar', 'Perez', 'edgar@edgar.com', '$2b$10$IEwM4Uy08xV70dKQYtKqwOviY3L8htHtF.o.EmgjvuXbzus9SQ2O.', '123456789', 'Colombia', 'Calle 123','admin');

select * from usuarios
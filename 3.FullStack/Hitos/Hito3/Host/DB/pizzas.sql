Create database pizzeria;


\c pizzeria;
CREATE TABLE pizzas (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    price int NOT NULL,
    img varchar(255) NOT NULL,
    description varchar(500) Not NUll,
    ingredientes varchar(255) Not NUll
);

INSERT INTO pizzas (id, name, description, img, ingredientes , price) VALUES 
(default,'española', 'Deléitate con nuestra exquisita pizza española, una explosión de sabores mediterráneos que combina la frescura de los tomates con la intensidad del jamón y el choricillo, todo sobre una masa crujiente y dorada. ¡Una experiencia gastronómica única que te transportará a las soleadas costas de España con cada bocado!', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab', '{"mozzarella", "tomates", "jamón", "choricillo"}', 7250),
(default,'salame', 'Sumérgete en el auténtico sabor italiano con nuestra pizza Salame. Cada rebanada es una obra maestra de la cocina italiana, con la combinación perfecta de mozzarella fundida, tomates maduros y salame picante, coronada con un toque de orégano fresco. ¡Una delicia que satisfará tus antojos más exigentes!', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3', '{"mozzarella", "tomates", "salame", "orégano"}', 5990),
(default,'napolitana', 'La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c', '{"mozzarella", "tomates", "jamón", "orégano"}', 5950),
(default,'cuatro estaciones', 'Descubre un festín de sabores con nuestra pizza Cuatro Estaciones. Inspirada en los colores y aromas de las estaciones del año, esta pizza combina la suavidad de la mozzarella con la robustez del salame, las aceitunas y los champiñones frescos. ¡Una verdadera sinfonía de sabores que te hará volver por más!', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be', '{"mozzarella", "salame", "aceitunas", "champiñones"}', 9590),
(default,'bacon', ' Prepárate para un festín de sabor con nuestra irresistible pizza Bacon. Cada bocado es una explosión de sabores ahumados, con crujientes trozos de bacon, jugosos tomates cherry y la cremosidad de la mozzarella, todo coronado con un toque de orégano fresco. ¡Una experiencia gourmet que despertará tus sentidos!', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2', '{"mozzarella", "tomates cherry", "bacon", "orégano"}', 6450),
(default,'pollo picante', 'Embárcate en un viaje de sabores con nuestra pizza Pollo Picante. Descubre la perfecta armonía entre la jugosidad del pollo a la parrilla, la picantez de los pimientos y la suavidad de la mozzarella, todo sobre una masa dorada y crujiente. ¡Una explosión de sabores que te dejará deseando más en cada bocado!', 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be', '{"mozzarella", "pimientos", "pollo grillé", "orégano"}', 8500);

SELECT * FROM pizzas;

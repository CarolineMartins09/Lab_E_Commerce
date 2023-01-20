-- Active: 1674084192186@@35.226.146.116@3306
CREATE TABLE labecommerce_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_products(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_purchases(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
    FOREIGN KEY(product_id) REFERENCES labecommerce_products(id),
    quantity INT NOT NULL,
    total_price INT NOT NULL

)

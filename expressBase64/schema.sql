-- SQLite
-- MEMBUAT TABLE USER

-- CREATE TABLE users(
--   id INTEGER PRIMARY KEY,
--   username VARCHAR NOT NULL UNIQUE,
--   password VARCHAR NOT NULL,
--   avatar BLOB,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- TIMESTAMP DEFAULT
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- CREATE TABLE notes(
--   id INTEGER PRIMARY KEY,
--   username VARCHAR NOT NULL,
--   title VARCHAR NOT NULL,
--   body VARCHAR NOT NULL,
--   image VARCHAR NOT NULL,
--   created_at CURRENT_TIMESTAMP
-- );
-- TIMESTAMP DEFAULT
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- INSERT USERS
-- INSERT INTO users(username, password, avatar, created_at) VALUES("aldodevv", "01081992", "/assets/images/avatar/aldo.png", "2021-21-21");

-- INSERT NOTE
-- INSERT INTO notes(username, title, body, image, created_at) 
-- VALUES(
--   "aldo", 
--   "ini table notes", 
--   "mengsedih gan ketipu tukang bakso", 
--   "assets/images/notes_image/aldo.png", 
--   "2020-20-20"
--   );

-- Menambahkan column baru
-- ALTER TABLE users
--   ADD created_at CURRENT_TIMESTAMP;

-- /APUS TABLE
-- DROP TABLE users;
INSERT INTO users (first_name, last_name, username, email, password, phone, profile_image, recovery_token, created_at, updatedAt)
VALUES ('Eva', 'Brown', 'evabrown', 'eva@example.com', 'hashed_password_4', '3339876543', 'https://example.com/profile4.jpg', NULL, NOW(),NOW()),
('Michael', 'Lee', 'michaellee', 'michael@example.com', 'hashed_password_5', '9995554321', 'https://example.com/profile5.jpg', NULL, NOW(),NOW()),
('Sara', 'Martinez', 'saramartinez', 'sara@example.com', 'hashed_password_6', '7771234567', 'https://example.com/profile6.jpg', NULL, NOW(),NOW()),
('David', 'Garcia', 'davidgarcia', 'david@example.com', 'hashed_password_7', '1119876543', 'https://example.com/profile7.jpg', NULL, NOW(),NOW()),
('Emily', 'Clark', 'emilyclark', 'emily@example.com', 'hashed_password_8', '2225554321', 'https://example.com/profile8.jpg', NULL, NOW(),NOW()),
('Daniel', 'Lopez', 'daniellopez', 'daniel@example.com', 'hashed_password_9', '6661234567', 'https://example.com/profile9.jpg', NULL, NOW(),NOW()),
('Olivia', 'Taylor', 'oliviataylor', 'olivia@example.com', 'hashed_password_10', '4449876543', 'https://example.com/profile10.jpg', NULL, NOW(),NOW()),
('John', 'Doe', 'johndoe', 'john@example.com', 'hashed_password_1', '1234567890', 'https://example.com/profile1.jpg', NULL, NOW(),NOW()),
('Alice', 'Smith', 'alicesmith', 'alice@example.com', 'hashed_password_2', '9876543210', 'https://example.com/profile2.jpg', NULL, NOW(),NOW()),
('Bob', 'Johnson', 'bobjohnson', 'bob@example.com', 'hashed_password_3', '5551234567', 'https://example.com/profile3.jpg', NULL, NOW(),NOW());

INSERT INTO conversation_types (type,created_at, updatedAt)
VALUES ('single',NOW(),NOW()),
('group',NOW(),NOW());


INSERT INTO conversations (title, image_conversation, created_by_user_id, type_conversation_id,created_at, updatedAt)
VALUES ('Conversación 1', 'https://example.com/conversation1.png', 1, 1,NOW(),NOW()),
('Conversación 2', 'https://example.com/conversation2.png', 1, 2,NOW(),NOW()),
('Conversación 3', 'https://example.com/conversation3.png', 2, 1,NOW(),NOW()),
('Conversación 4', 'https://example.com/conversation4.png', 2, 2,NOW(),NOW()),
('Conversación 5', 'https://example.com/conversation5.png', 3, 1,NOW(),NOW()),
('Conversación 6', 'https://example.com/conversation6.png', 3, 2,NOW(),NOW()),
('Conversación 7', 'https://example.com/conversation7.png', 4, 1,NOW(),NOW()),
('Conversación 8', 'https://example.com/conversation8.png', 4, 2,NOW(),NOW()),
('Conversación 9', 'https://example.com/conversation9.png', 5, 1,NOW(),NOW()),
('Conversación 10', 'https://example.com/conversation10.png', 5, 2,NOW(),NOW()),
('Conversación 11', 'https://example.com/conversation11.png', 6, 1,NOW(),NOW()),
('Conversación 12', 'https://example.com/conversation12.png', 6, 2,NOW(),NOW()),
('Conversación 13', 'https://example.com/conversation13.png', 7, 1,NOW(),NOW()),
('Conversación 14', 'https://example.com/conversation14.png', 7, 2,NOW(),NOW()),
('Conversación 15', 'https://example.com/conversation15.png', 8, 1,NOW(),NOW()),
('Conversación 16', 'https://example.com/conversation16.png', 8, 2,NOW(),NOW()),
('Conversación 17', 'https://example.com/conversation17.png', 9, 1,NOW(),NOW()),
('Conversación 18', 'https://example.com/conversation18.png', 9, 2,NOW(),NOW()),
('Conversación 19', 'https://example.com/conversation19.png', 10, 1,NOW(),NOW()),
('Conversación 20', 'https://example.com/conversation20.png', 10, 2,NOW(),NOW());

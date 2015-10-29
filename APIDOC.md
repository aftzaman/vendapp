# API for VEND #

# Base URL: http://localhost:3000


# Sign UP

## Method: POST
## URL: /register
## Sample Input: http://localhost:3000/register
  # Data: {"email":"vaishnavi@gmail.com","name":"vaishnavi","mobile":8574896574,"password":"vaishnavi"}
## Sample Output: {
  "success": true,
  "user": {
    "_id": "5630d8b99c6f01006884fe51",
    "password": "$2a$10$EoWdEn7QGGUaAMDrEaCwuuRE6.ip1R0qKuQIo0MnmUdAyp3jjXpKK",
    "mobile": 8574896574,
    "name": "vaishnavi",
    "email": "vaishnavi@gmail.com",
    "__v": 0,
    "createdAt": "2015-10-28T14:15:30.416Z",
    "verified": true,
    "role": "user"
  }
}
## Description: Register the user account with the password

# Login

## Method: POST
## URL: /login
## Sample Input: http://localhost:3000/login
  # Data:{"email":"vaishnavi@gmail.com","password":"vaishnavi"}
## Sample Output:{
  "success": true,
  "user": {
    "_id": "5630d8b99c6f01006884fe51",
    "password": "$2a$10$EoWdEn7QGGUaAMDrEaCwuuRE6.ip1R0qKuQIo0MnmUdAyp3jjXpKK",
    "mobile": 8574896574,
    "name": "vaishnavi",
    "email": "vaishnavi@gmail.com",
    "__v": 0,
    "createdAt": "2015-10-28T14:15:30.416Z",
    "verified": true,
    "role": "user"
  }
}
## Description: Returns user data
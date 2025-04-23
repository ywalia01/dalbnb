# dalbnb

This project was developed as the group project submission for the course CSCI5410 - Serverless Data Processing at Dalhousie University. It represents a serverless vacation home booking system with multiple functionalities, using various AWS services and Terraform for infrastructure deployment.

## Project Overview

dalbnb is a serverless DALVacationHome application using a multi-cloud deployment model and backend-as-a-service (BaaS). It provides customization features and additional services for authorized users, as well as limited services to guests. The application includes an online virtual assistant to answer user queries and a message passing functionality between authorized users and agents.


## Project Architecture

![DalBNB Architecture](https://github.com/user-attachments/assets/f48bc9a0-b33c-44fd-bace-1d3e1acb65f1)

## Project Features

- **User Management**: 
   - Sign-up, login, and authentication using AWS Cognito. Registered users and property agents follow multi-factor authentication.
- **Room Booking**: 
   - Users can browse available rooms, check prices, and make reservations for a specific period.
- **Feedback System**: 
   - Customers can provide feedback on their stay, which is stored in DynamoDB.
- **Virtual Assistant**: 
   - Users can interact with the AWS Lex bot for navigation and quick answers to their queries.
- **Message Passing**: 
   - Message passing between customers and property agents
- **Notifications**: 
   - Notifications for registration, login, and bookings


## Project Structure

The project is divided into three main folders:
- **Backend**: Contains separate folders for different AWS Lambda functions. These functions handle the various backend processes like user management, room booking, and feedback handling.
- **Frontend**: A React codebase responsible for rendering the user interface, allowing users to interact with the application (e.g., browsing rooms, booking, or leaving feedback).
- **Infra**: Contains the Terraform configuration files for deploying and managing AWS infrastructure (Lambdas, Cognito, etc.).

## Key Technologies

- AWS Lambda: Used for serverless backend processing, with individual Lambda functions handling different functionalities like user registration, booking, and feedback management.
- AWS Cognito: Implements user authentication and authorization, including multi-factor authentication for registered users and property agents.
- AWS Lex: The virtual assistant (chatbot) built using AWS Lex helps users navigate through the platform and provides quick answers to common queries.
- React: Frontend framework for building the user interface
- Terraform: Infrastructure-as-Code for provisioning and managing the AWS resources used in the project.

## Setup Instructions

1. **Backend**: 
   - Navigate to the `backend` folder.
   - Ensure that AWS Lambda functions are configured and deployed through AWS.
2. **Frontend**:
   - Navigate to the `frontend` folder.
   - Run `npm install` to install the dependencies.
   - Start the React application using `npm start`.
3. **Infrastructure**:
   - Navigate to the `infra` folder.
   - Apply the Terraform configurations using `terraform apply`.

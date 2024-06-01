# Employee Manager System (EMS)

## Project Overview

Employee Manager System (EMS) is an Angular-based application designed to manage employee information within an organization. The system allows administrators to add, update, delete, and view employee details efficiently.

This README file provides an overview of the project, setup instructions, and steps to run the application using Docker Compose.

### Installation
1. Clone the repository:
```
> git clone https://github.com/Original-organization-name/EMS-clienti_53004_52325.git

> cd EMS-client
```

2. Install the project dependencies:
```
npm install
```

### Running the Application
#### Docker Compose
To run the application using Docker Compose, follow these steps:

1. Ensure Docker and Docker Compose are installed and running on your machine.

2. Build and run the Docker containers:
```
docker-compose -f web.yaml up --build
```
3. Open your browser and navigate to http://localhost:4200/app to access the application.

#### Development Server
To run the application in development mode:

1. Start the development server:

```
ng serve
```

2. Open your browser and navigate to http://localhost:4200/app.

### Conclusion
This README provides the basic information to get started with the Employee Manager System (EMS) project. For further details and contributions, please refer to the project's documentation or contact the repository maintainer.

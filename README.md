### Dentist Management System

This is a case management system designed specifically for the National Dental Centre Singapore. It helps users efficiently annotate and review data, providing role-based access control, login authentication, and a streamlined interface for user tasks.



### Accessing the Hosted Application

The application is hosted on GitHub Pages. You can access it via the following link:  
🔗 [Dentist Management System](https://zscmngykx.github.io/case-management/)

Instructions:  
1. Open the above link in your browser.  
2. You will be redirected to the login page by default.  
3. Log in using valid credentials.  
   - Example credentials:
     - Username: senior  
       Password: 123  
     - Username: junior  
       Password: 123  
4. After logging in, you will be redirected to the corresponding homepage based on your role:
   - Senior: Access the Senior Case List.  
   - Junior: Access the Junior Case List.  



### Assumptions

1. **Roles and Permissions**  
   The system assumes two user roles: Senior and Junior. Each role has access to specific sections of the application.  

2. **Data Initialization**  
   Local storage (localStorage) is used to store user roles and authentication status. Default roles (Senior or Junior) are initialized for testing purposes.  

3. **Resource Management**  
   Images and other resources are managed within the `src/assets` and `public` folders of the project.  



### Limitations

1. **Authentication**  
   The application uses local storage to manage tokens and roles, which is not secure and is intended for demonstration purposes only. No real backend or database is used for authentication.  

2. **Role Restrictions**  
   Role restrictions are implemented on the client side and can be bypassed by users with technical knowledge.  

3. **Performance**  
   Some image resources are hosted in the `src/assets` folder, and their loading time may depend on the network connection.  

4. **GitHub Pages**  
   Due to GitHub Pages not supporting server-side routing, the application uses hash-based routing.  

5. **Test Credentials**  
   All usernames and passwords are hardcoded for testing purposes.  
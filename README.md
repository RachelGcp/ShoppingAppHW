for the client side - run 
npm init -y
npm install @reduxjs/toolkit react-redux react-router-dom

for node project run 
npm install express mongoose cors dotenv
npm install --save-dev nodemon

for .net project run 
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update


dotnet restore

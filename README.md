# MVC Typescript Boilerplate

This is a simple boilerplate for web applications developed in .Net Core 3.1.

# Pre-requisites
1. .Net Core 3.1 (https://dotnet.microsoft.com/download)
2. Yarn 1.21.1 (https://legacy.yarnpkg.com/en/docs/install#windows-stable)
3. (Optional) Entity Framework Core global packages (https://docs.microsoft.com/en-us/ef/core/get-started/index?tabs=netcore-cli)

# Setup steps
1. Clone the repo locally
2. Go to the repo directory (`cd MvcTypescriptBoilerplate`)
3. Run `yarn install`
4. (Optional) Prepare EF Core for Database Creation
    1. Replace all references to MvcTypescriptBoilerplate and MvcTypescriptBoilerplateContext with your project name
    2. Install NuGet packages
    3. (Optional) Make any changes to the Models directory and create a new migration
    4. run `dotnet ef database update` to create the local sqlite db
5. Change the project name and go!

# Elements
1. Webpack
2. Typescript
3. Sass
4. Entity Framework Core packages and MVC configuration

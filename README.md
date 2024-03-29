
# Project Setup Guide

This document provides a comprehensive guide on setting up the back-end environment for our project, including cloning the code repository, installing necessary tools, and running the project.

## Cloning the Repository

First, clone the back-end code repository from GitHub by running the following command in your terminal:

```bash
git clone https://github.com/ThodsaphonSP/SPCaemucals.git
```

## Installation Requirements

### .NET 8 SDK

1. Download and install the .NET 8 SDK to work with our project. This is essential for building and running the .NET applications.
    - [Download .NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

### Docker

2. Docker is required for running the SQL Server container which our application depends on. Download and install Docker Desktop:
    - [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Setting Up the Development Environment

### Running SQL Server on Docker

Run the following command in your command prompt or terminal to start a SQL Server container. Make sure Docker Desktop is running before executing this command:

```bash
docker run -e "ACCEPT_EULA=Y" -e 'SA_PASSWORD=A11228803a!3' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```

This command starts a Docker container with SQL Server 2022, accepting the End User License Agreement, setting the SA password, and mapping port 1433 on your host to port 1433 in the container.

## Running the .NET Project

To run the .NET project, you'll need to navigate to the project directory and use the `dotnet run` command. For a detailed guide on running a .NET project, you can refer to this YouTube tutorial:

- [How to run a .NET project](https://www.youtube.com/watch?v=Yczthl7a7v8)

## Design Reference

For UI/UX design references and layouts, visit the Figma link provided below:

- [Figma Design](http://www.figma.com/file/BgwOvR8eeN5N7RI3sFACQG/backoffice?type=design&node-id=0-1&mode=design&t=gYVMAxJDoyFiMlYs-0)


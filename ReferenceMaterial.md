# Reference Material

```tex
This is the list of all the possible useful tutorial that we referred to during the developing process.
```
## React
### How to start React project?

*Prerequisite*: Having Node.JS installed on your computer!(Download [<u>here</u>](https://nodejs.org/en/download/package-manager))

* Create new React Project

  ```shell
  npx create-react-app my-app
  ```

* Start the project(Default port number: 3000)

  ```shell
  npm start
  ```

### Hooks and Components

Component is the most essential idea in React project. We will consider each reusable widgets as a 'component' and pull it up as a single file.

Hook is another important tools used in React that may cause confusion to the developers who is new to React. Please refer to this link for detailed information: [Hook Tutorial](https://react.dev/reference/react/hooks).

## CSS

**TailwindCSS**: https://tailwindui.com/templates?ref=sidebar

> Important package for sizing: @tailwindcss/aspect-ratio

**Icons**: https://fontawesome.com/versions

## Useful Plugins

### VSCode

* ESlint: Grammar checker for JavaScript
* ES7: offering large amount of extensions
* Tailwind CSS IntelliSense: for auto complete, linting, hover preview...
* Copilot: Automated Coding Helper

## Spring Boot

**Dependencies Search**: https://mvnrepository.com

**Integrate MySQL**: https://medium.com/@tecnicorabi/integrating-mysql-with-spring-boot-a-comprehensive-guide-all-in-one-c30b7b44a043

## MySQL

Installation and create table: https://www.youtube.com/watch?v=wgRwITQHszU

> If click on the ⚡️icon with **I**, we only execute the SQL with the cursor hovering on

### Configuration

Install the MySQL data base via the link here:

* MySQL Server:  https://dev.mysql.com/downloads/mysql/
* MySQL Workbench(UI): https://dev.mysql.com/downloads/workbench/

**MacOS**

> For **MacOS user**, we highly recommend you to start the MySQL server on terminal instead of 'Setting'
>
> ```shell
> # Start Server
> sudo /usr/local/mysql-8.4.0-macos14-arm64/support-files/mysql.server start
> # Stop Server
> sudo /usr/local/mysql-8.4.0-macos14-arm64/support-files/mysql.server stop
> # Restart Server
> sudo /usr/local/mysql-8.4.0-macos14-arm64/support-files/mysql.server restart
> ```
>
> Pay attention to the <u>path</u>!

**Windows**

> For **Windows user**, you need to initialize the server before your first start.
>
> Remember to run PowerShell  as an Administrator.
>
> **Initialize**
>
> ```shell
> # change direction to where your mysql application is installed
> # should usually be "C:\Program Files\MySQL\MySQL Server xxx\bin"
> 
> # install mysql server
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> mysqld --install
> # initialize data
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> mysqld --initialize
> # set root password as empty
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> mysqld --initialize-inscure
> ```
>
> **Run Server**
>
> ```shell
> # Start Server
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> net start mysql
> # Stop Server
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> net stop mysql
> # Restart Server
> PS C:\Program Files\MySQL\MySQL Server 8.4\bin> net restart mysql
> ```


# Emailer

The purpose of this project is to create an email application that manages contact lists, the creation of templates using MJML, and the sending of emails.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Ruby 3.3.0
- Rails 7.1.3
- MySQL Database
- Redis Server
- MJML
- Yarn

### Installing

1. Clone the repository
2. Run `bundle install` to install the required gems
3. Run `yarn install` to install the required packages
4. Run `rails db:create` to create the database
5. Run `rails db:migrate` to run the migrations

### Running the application

1. Run the server using `bin/dev` (requires foreman gem)
2. Access the application at `http://localhost:3000`

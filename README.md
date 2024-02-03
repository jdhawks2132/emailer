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


### Phase 1: Contact List Management

The first phase of the project is to create a contact list management system. The system should allow the user to create, edit, and delete contact lists. Each contact list should have a name and a description. The maintenance of the contact lists will revolve around uploading CSV files with contact data and very limited manual entry.

Phase 1 Requirements:

- [ ] Create a contact list with a name and description
- [ ] Upload a CSV file with contact data
- [ ] View the contact list
- [ ] Edit the contact list (by uploading a new CSV file)
- [ ] Delete the contact list
- [ ] View the contact list's contacts
- [ ] Add a contact to the contact list (manually or by uploading a CSV file)
- [ ] Edit a contact in the contact list
- [ ] Delete a contact from the contact list
- [ ] Search for a contact in the contact list
- [ ] Export the contact list to a CSV file

#### Flags

Add any flags for further categorization of contacts. Flags can be used to categorize contacts into different groups. For example, a contact can be flagged as "VIP" or "Preferred Customer". The user should be able to create, edit, and delete flags.

Phase 1 Requirements:

- [ ] Create a flag with a name and description
- [ ] Edit the flag
- [ ] Delete the flag
- [ ] Assign a flag to a contact
- [ ] Remove a flag from a contact
- [ ] View all contacts with a specific flag
- [ ] View all flags assigned to a contact
- [ ] View all contacts without a flag
- [ ] View all flags

#### Models and Relationships for Phase 1

- ContactList
	- name: string
	- description: text
	- contacts: has_many

- Contact
	- first_name: string
	- last_name: string
	- email: string
	- phone: string (optional)
	- address: string (optional)
	- city: string (optional)
	- state: string (optional)
	- zip: string (optional)
	- country: string (optional)
	- contact_list: belongs_to
	- flags: has_many

- Flag
	- name: string
	- description: text
	- contacts: has_many

- ContactFlag
	- contact: belongs_to
	- flag: belongs_to

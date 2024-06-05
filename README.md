# CI 102 Lab 60 Group 14

# Comment
This project is complete and currently not under active development.


## Name
Discover Philly

## Description
Discover Philly is a website designed to showcase various places to visit in Philadelphia, specifically for tourists who come to Philadelphia for visit. The website allows users to explore detailed information about each place, including images, descriptions, addresses, and ratings. Users can also provide feedback and rate the places they have visited. Users can use our random feature which allows user to look at a random picture and get info about that place, or skip it for the next picture if they don't like the previous image. Users can also plan their trips by using our weather feature which displays the weather for the day. Users can also use our map feature to figure out directions from each places. Additionally, users can test their knowledge on Philadelphia by playing our trivia.
## Badges

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-completed-brightgreen)

## Visuals


### Homepage
![Homepage](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/homepage.png)
Description: This is the homepage of the Discover Philly application, providing navigation to all features.

### Places
![Places](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/Places.png)
Description: This page shows a list of some of the famous places around Philadelphia.

### Place Details
![Place Details](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/place_details.png)
Description: This screen shows detailed information about a selected place, including its description, address, rating, and user feedback.

### Random Trip
![Random Trip](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/random.png)
Description: The Random Trip feature suggests a random place to visit, providing a quick and exciting way to explore new places.

### Maps
![Maps](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/maps.png)
Description: The Maps feature provides location maps for various places in Philadelphia.

### Weather
![Weather](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/weather.png)
Description: The Weather feature displays current weather updates for Philadelphia.

### Trivia
![Trivia](https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/60/14/ci-102-lab-60-group-14/-/raw/main/images/trivia.png)
Description: The Trivia feature offers fun facts and interesting information about Philadelphia.



## Installation
1. Install Python: https://www.python.org/downloads/
2. Install Flask: Mac: Open Terminal, install flask using: pip3 install Flask
                  Windows: Open Command Prompt, install flask using: pip3 install Flask
3. Install MySql Workbench: https://dev.mysql.com/downloads/workbench/
4. Install MySQL Connector: Mac: Open Terminal: pip3 install mysql-connector-python
                            Windows: Open Command Prompt: pip install mysql-connector-python




## Usage
To use the Discover Philly application, follow these steps:

**Homepage:**

Navigate to the homepage to see an overview of the application.

Example: Open and run test_database.py and load the website on the link provided by Python.

**Places:**

Click on the "Places" link in the navigation bar to view a list of famous places around Philadelphia.

Example: Click on the "Places" link to see a list of attractions.

**Place Details:**

Click on any place from the list to see detailed information about it, including its description, address, rating, and user feedback.

Example: Click on "American Philosophical Society" or any other places listed to view its details. You can also provide feedback and ratings to that particular place.


**Random Trip:**

Use the "Random Trip" feature to get a suggestion for a random place to visit.

Example: Click on the "Random Trip" link to get a random place suggestion. Click "Skip" if you want to skip that place or click "Take me there" for more information about that place.

**Maps:**

Access the "Maps" feature to view location maps for various places in Philadelphia.

Example: Click on the "Maps" link to see the maps.

**Weather:**

Check the "Weather" section for current weather updates in Philadelphia.

Example: Click on the "Weather" link to view the weather updates.

**Trivia:**

Explore the "Trivia" section for fun facts and interesting information about Philadelphia.

Example: Click on the "Trivia" link to learn more about Philadelphia.

**Submitting Feedback:**

On the place details page, you can submit feedback and a rating for a place.

Example: Navigate to a place details page, fill out the feedback form, and click "Submit" to add your feedback.

## Support
For additioanl help, feel free to email your concerns at sa3933@drexel.edu


## Contributing

We are open to any contributions that would help enhance the project in terms of new features, visual appeal and more interactivity.

To get the website running, first you have to configure MySQL Workbench by connecting to MySQL Server and creating host, root and password. When you configure MySQL make sure to remember your credentials for host, root and password. Open MySQLWorkbench and execute the database phillyTravelDatabase.sql. To run the script, click on the lightning bolt icon (Execute) or press Ctrl + Shift + Enter (Windows) or Cmd + Shift + Enter (Mac). After running the script, check the Action Output pane at the bottom to see if the script executed successfully. Verify the Database: In the left sidebar, under the SCHEMAS section, you should see the newly created database and its tables. Expand the database and tables to verify that everything has been created as expected.

Now open test_database.py and put your own host, root and password under 'db = mysql.connector.connect'. Run test_database.py and now you can open the website and browse.



## Authors and acknowledgment
Authors for this project are:

- Josh Morris : Frontend Developer
- Wes Lee: Backend Developer
- Chris Alex: Frontend and Backend Developer
- Sahil Adhikari: Database Administrator and Backend Developer

We would like to acknowledgment W3Schools, Leaflet and Youtube channel freecodecamp and TechWithTim for guidance and source during this project development.

## License
This project was created for educational purposes by undergraduate students and does not have a formal open source license. Feel free to use and modify the code for your own educational purposes.

## Project status
This project is complete and currently not under active development.



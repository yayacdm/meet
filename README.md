# meet
## Achievement 4: Meet App

### Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.


### Key Features:
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.


### User Stories:
1. As a user, I would like to be able to filter events by city so that I can see the list of events
that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the
app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events
I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I
can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each
city so that I know what events are organized in which city.


### Test Scenarios:
**SCENARIO 1.1**: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
>Given user hasn’t searched for any city

>When the user opens the app

>Then the user should see a list of all upcoming events

**SCENARIO 1.2**: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
>Given the main page is open

>When user starts typing in the city textbox

>Then the user should see a list of cities (suggestions) that match what they’ve typed

**SCENARIO 1.3**: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
>Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing

>When the user selects a city (e.g., “Berlin, Germany”) from the list

>Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

**SCENARIO 2.1**: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
>Given the user hasn't selected an event

>When the user views event list

>Then the user should see all events in a simple collapsed format

**SCENARIO 2.2**: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS
>Given the event list is showing

>When the user selects an event

>Then the event elements should expand to show more details

**SCENARIO 2.3**: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
>Given the event list is showing and an event is selected/expanded

>When the user selects the expanded event again

>Then the selected event should collapse to a simple collapsed format (defualt)

**SCENARIO 3.1**: WHEN USER HASN'T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER
>Given a user has not specified number of events to show

>When event list is shown

>Then the default number of events shown will be 32

**SCENARIO 3.2**: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE
>Given the user would like a certain number of events shown

>When user specifies the amount of events

>Then the event list will show users desired amount of events

**SCENARIO 4.1**: SHOW CACHED DATA WHEN THERE'S NO INTERNET CONNECTION
>Given there is no internet connection

>When a user opens the app

>Then user will see a cached version of the app to view the events they opened last

**SCENARIO 4.2**: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)
>Given the app is offline and user is viewing cached version of app

>When user changes any settings such as date, location, or time

>Then app will show error letting user know they are offline

**SCENARIO 5.1**: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY
>Given user would like to see a visual representaion of events

>When user selects charts

>Then user can open a visual representaion (chart) of events taking place in selected city

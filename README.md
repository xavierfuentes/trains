# UI Dev Tech Task

Create a simple two "page" web application using node, react, redux (or another state management library of your choice), to display train services departing from London Waterloo station.

**Basic requirements:**

 - Consume our real-time API, [https://realtime.thetrainline.com/departures/wat](https://realtime.thetrainline.com/departures/wat)
     - CORS and JSONP are not enabled on this end-point, so you will need a proxy or use saved responses
     - The realtime API returns origin/destination stations and service operators as codes, so get your app working by just displaying the codes
     - Include only services where transport mode is TRAIN
 - List all departing services, like this:

![mockup](Farringdon_to_West_Hampstead_Thameslink___Services.png)

 - On click/tap on a service, display calling pattern like this:

![mockup](Farringdon_to_West_Hampstead_Thameslink___Live_Departures___Arrivals.png)

**Nice to have:**

 - Responsive layout
 - Transition between views
 - Automatic update of train progress

 ## Quick start
After installing dependencies with `npm i` or `yarn` run `npm start` or `yarn start` and go to [http://localhost:3000](http://localhost:3000).

## Test
To run tests on the client, navigate to the client `cd packages/client` and run `npm test` or `yarn test`

## Todo
- finish styling for service detail
- add more snapshot and unit testing

## Improvements
- Automatic update of train progress
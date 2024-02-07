
# 🗒️ QueryPads by Atlan
<strong> Try it now: https://query-pad.vercel.app/</strong>
<br>

## Introduction

This is a mock application bulid as an interview task for Atlan. It mocks the experience of running SQL queries, viewing the data, saving the queries and searching the available table attributes.

##Problem Statement Outline
>  Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application..

Considerations
- This is a dummy application.
- It must include a space to accept SQL queries.
- The application does not need to have a backend, a query engine or query validation, or any syntax validation
- The data that in the application displayed can be any chunk of data.
- The application must have more than one query accompanied by its corresponding table of data.
- The data and query need not to be in sync
- Build for data analysts who will spend all day with the app. The app should have all the necessary features.

## Data 
The data used in the application is obtained from https://github.com/graphql-compose/graphql-compose-examples/raw/master/examples/northwind/data/csv/

When the app bootstraps, the csv files from the above link are downloaded, data is extracted, converted and stored in a .js file for easy access and use.

## Features
The app has 2 sections, the left sidebar and the editor on the right.
The user can drag the divider to adjust the widht of both sections as per need
Left Sidbar
1. It has a space that shows available tables and their attributes
2. User can search attributes using a search input
3. There is a section below for saved queries
4. user can also search these saved queries by their text 

Editor pane
1. The app has an input field to put SQL queries.
2. There is a run button places close to the input that enables the run query functionality
3. There is a button to Save the queries
4. It also has an button that can downlaod all the data of the table
5. The outbut of the table is virtualized so it can render big tables without any problem

Dark mode - The app has a theme switch button that can toggle between light and dark themes

There are also some mocked features that were not added in the scope but showcase the usefulness.
1. Source selector - Mocks the behavoiur of selecting the source of the data
2. Edit query name - Each query can be saved/searched with a name
3. Login - This is a much needed feature to personalise the app for users.

## Screenshots

<img width="1352" alt="Screenshot 2024-02-07 at 3 07 13 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/9737c50d-f74e-4fa3-8180-1654baf101b8">

<img width="1352" alt="Screenshot 2024-02-07 at 3 09 20 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/684ba244-c858-40c2-9345-9f1ce86eded4">

<img width="1351" alt="Screenshot 2024-02-07 at 3 09 39 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/c2ff3909-58d2-4040-94a6-5d5c0b65c76d">

<img width="1352" alt="Screenshot 2024-02-07 at 3 09 59 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/0479b7e1-5711-444d-bce8-85a19cf7fd6f">


### Page Performance Insights

####1. Chrome Devtools - Performance
<strong>App load Time: 0.43 seconds (Chrome Dev tools - Performance)</strong>
##### Desktop Metris: 
LCP: 0.434s
FCP: 0.430s
##### Mobile
LCP: 0.45s
FCP: 0.45s

<img width="652" alt="loadtime d" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/77262b3e-1496-4d28-9a7d-249786f21839">

####2. Chrome Devtools - Lighthouse - Analyse page load
##### Desktop

![Screenshot 2024-02-06 at 6 11 49 PM](https://github.com/himanshusharma129/QueryPad/assets/42390569/a337f549-420e-4464-b2b1-6171c2a8cf6d)

##### Mobile
<img width="970" alt="Screenshot 2024-02-07 at 3 43 02 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/f08bb480-f1bd-442a-b905-2ef1b07ed8f3">

####3. Web.dev
Desktop: https://pagespeed.web.dev/analysis/https-query-pad-vercel-app/lbfdsyrdu9?form_factor=desktop
Mobile: https://pagespeed.web.dev/analysis/https-query-pad-vercel-app/lbfdsyrdu9?form_factor=mobile



## Optimisations

As mentioned above, the app has met the standards of web performance metrics. The app has a TTI of 0.45s and the cumulative layout shift is 0.
The app also meets the Progressive Web App (PWA) requirements and can be installed and used offline.

### 1. Page Load Time
1. Initially, Monaco editor was used as SQL Input. But this brought alot of page time load delay. Also there was a lot of unused css with it which was reducing the performance metric. So I replaced the Monaco editor with simple input field.
2. The app uses `react-virtualised` Table that can render the rows of the table on demand thus boosting the performance.
3. Minimal dependencies have been used to build the app.

### 2. Responsiveness and UX
1. The app uses a react-splitter-layout to enable re-sizable panes. The user can drag and adjust the width of the panes as per need,
2. The website has been optimized for responsiveness, despite the fact that it's unlikely to be accessed frequently on mobile devices. `min-width` is used to give the table some space to show the columns with a scroll.
3. The website is hosted on Vercel, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security, and ranking.

### 3. Best Practices
1. The app is build in `TypeScript` and types are defined and used gracefully, thus avoiding runtime errors.
2. The app used a design system where css variables are used at all the places.
3. Commonly used elements like button and text have generic components that easily styles them using differnt types and can be overriden if needed.
4. The app is build with `styled-components` making the code easy to read/change, allowing type checking and avoiding classname issues
5. The app is build using react functional components only for better code readability.



## 👨‍💻 Contributors 
<table>
  <tr>
    <td align="center"><a href="https://github.com/himanshusharma129"><img src="https://avatars.githubusercontent.com/u/42390569?v=4" width="100px;" alt="profile" style="border-radius:50%"/><br /><sub><b>Himanshu Sharma</b></sub></a><br />
	</td>  
  </tr>
</table>

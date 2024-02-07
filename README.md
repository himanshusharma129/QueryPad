
# 🗒️ QueryPad by Atlan
<strong> Try it now: https://query-pad.vercel.app/</strong>
<br>

## Introduction

QueryPad is a mock application built as part of an interview task for Atlan. It simulates the experience of running SQL queries, viewing data, saving queries, and searching table attributes.

## Problem Statement Outline
>  The task involved creating, designing, and implementing a web-based application capable of running SQL queries and displaying their results. The application needed to include a space for users to input SQL queries, execute them, and visualize the outcomes within the application.

Considerations
- The application is a mockup.
- It should feature a space for inputting SQL queries.
- No backend, query engine, or syntax validation was required.
- The displayed data could be arbitrary.
- The application must have multiple queries accompanied by respective data tables.
- Data and queries do not need to be synchronized.
- Designed for data analysts' use with all necessary features.

## Data 
QueryPad fetches data from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv "here"). Upon initialization, CSV files from the provided link are downloaded, data extracted, converted, and stored in a .js file for ease of access and use.

## Features
The app has 2 sections, the left sidebar and the editor on the right.

#### Left Sidbar
1. Displays available tables and their attributes.
2. Enables attribute search through an input field.
3. Contains a section for saved queries.
4. Supports searching saved queries by their text.
5. Can be resized to an extent using a draggable divider

#### Editor pane
1. Includes an input field for SQL queries.
2. Features a run button next to the input field for executing queries.
3. Provides a button to save queries.
4. Offers a download button to retrieve all table data.
5. Utilizes virtualization for rendering large tables efficiently.

#### Dark Mode
QueryPad supports a theme switch button to toggle between light and dark themes.

#### Mocked Features (Not Implemented)
1. Source selector: Simulates selecting the data source.
2. Edit query name: Simulates query naming.
3. Login: A potential feature for personalizing the application for users.

## Screenshots

<img width="1352" alt="Screenshot 2024-02-07 at 3 07 13 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/9737c50d-f74e-4fa3-8180-1654baf101b8">

<img width="1352" alt="Screenshot 2024-02-07 at 3 09 20 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/684ba244-c858-40c2-9345-9f1ce86eded4">

<img width="1351" alt="Screenshot 2024-02-07 at 3 09 39 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/c2ff3909-58d2-4040-94a6-5d5c0b65c76d">

<img width="1352" alt="Screenshot 2024-02-07 at 3 09 59 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/0479b7e1-5711-444d-bce8-85a19cf7fd6f">


### Page Performance Insights

#### 1. Chrome Devtools - Performance
<strong>App load Time: 0.43 seconds (Chrome Dev tools - Performance)</strong>
##### Desktop Metris: 
LCP: 0.434s
FCP: 0.430s
##### Mobile
LCP: 0.45s
FCP: 0.45s

<img width="652" alt="loadtime d" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/77262b3e-1496-4d28-9a7d-249786f21839">

#### 2. Chrome Devtools - Lighthouse - Analyse page load
##### Desktop

![Screenshot 2024-02-06 at 6 11 49 PM](https://github.com/himanshusharma129/QueryPad/assets/42390569/a337f549-420e-4464-b2b1-6171c2a8cf6d)

##### Mobile
<img width="970" alt="Screenshot 2024-02-07 at 3 43 02 PM" src="https://github.com/himanshusharma129/QueryPad/assets/42390569/f08bb480-f1bd-442a-b905-2ef1b07ed8f3">

#### 3. Web.dev
Desktop: https://pagespeed.web.dev/analysis/https-query-pad-vercel-app/lbfdsyrdu9?form_factor=desktop
Mobile: https://pagespeed.web.dev/analysis/https-query-pad-vercel-app/lbfdsyrdu9?form_factor=mobile



## Optimisations

QueryPad meets web performance standards, with a TTI of 0.45s and zero cumulative layout shift.
The app also meets the Progressive Web App (PWA) requirements and can be installed and used offline.

### 1. Page Load Time
1. Initially, Monaco editor was used as SQL Input. But this brought alot of page time load delay. Also there was a lot of unused css with it which was reducing the performance metric. So, replaced the Monaco editor with simple input field.
2. Implemented react-virtualized Table for efficient rendering of table rows.
3. Minimized dependencies for improved performance.

### 2. Responsiveness and UX
1. Employed react-splitter-layout for resizable panes, enhancing user experience.
2. The website has been optimized for responsiveness, despite the fact that it's unlikely to be accessed frequently on mobile devices. `min-width` is used to give the table some space to show the columns with a scroll.
3. Hosted the website on Vercel for fast loading times, CDN benefits, caching, and SSL security.

### 3. Best Practices
1. Developed in `TypeScript` with defined types for enhanced code readability and prevention of runtime errors.
2. Adopted a design system utilizing CSS variables throughout the application
3. Created generic components for commonly used elements like buttons and text, allowing easy styling and overrides.
4. Utilized styled-components for clear, type-safe, and classname-free CSS management.
5. Exclusively used React functional components for improved code readability.


## Dependencies used
The app is build using ReactJs framework alongwith [TypeScript](https://www.typescriptlang.org/ "TypeScript").

<strong>External libraries used</strong>
1. [react-splitter-layout](https://www.npmjs.com/package/react-splitter-layout "react-splitter-layout")
2. [react-spinners](https://www.npmjs.com/package/react-spinners "react-spinners")
3. [react-virtualized](https://www.npmjs.com/package/react-virtualized "react-virtualized")
4. [styled-components](https://www.npmjs.com/package/styled-components "styled-components")

*The dependencies also include releated types.


## App demo and code walkthrough Video
https://drive.google.com/file/d/1t5ONZW50chDfm5XO3jOR1ibw-y55ukWS/view?usp=sharing


## 👨‍💻 Contributors 
<table>
  <tr>
    <td align="center"><a href="https://github.com/himanshusharma129"><img src="https://avatars.githubusercontent.com/u/42390569?v=4" width="100px;" alt="profile" style="border-radius:50%"/><br /><sub><b>Himanshu Sharma</b></sub></a><br />
	</td>  
  </tr>
</table>

#  ReVogue README <!-- omit in toc -->


## Overview

_**ReVogue** ReVogue is an online thrift shop where people can sell or buy items that are being thrifted. This has become a very huge trend among shoppers and can be a greate opportunity to build a space where it is more virtual. Giving the user the chance to scroll in their confomrt of their home and find gems or score some "coins" aka successfully sell an item. A challenge that I forsee might be with making sure I stick to my MVP and not try to start working on PostMVP._


<br>

## MVP

_The **ReVogue** MVP  is to have a full CRUD app that has a fully functional front and backend. I will have a place where people will be able to see the items but will need to be logged in as a user in order to make a comment if they are intrested to buy or they have a question about the item. The seller will have the ability to add or delete an item._

<br>

### Goals

- _BACKEND_
- _Have a database with 3 tables_
- _Define models in Rails to interact with my database_
- _Implement working controllers for Full CRUD_
- _Have styling that goes with the theme of the app_
- _FRONTEND_
- _have 8 components_
- _Use state and props properly in my app_
- _Styling_
- _Linting_
- _Deployed App_



<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Creation of a dymanic app_                |
|   React Router   | _Client side routing for the React app_    |
|       Ruby       | _Work with rails for functional backend_   |
|  Ruby on Rails   | _RESTful endpoint for backend._            |
|       CSS        | _Styling to make it presentable_           |

<br>

### Client (Front End)

#### Wireframes


- Desktop 

![Screen Shot 2022-02-23 at 11 40 05 PM](https://user-images.githubusercontent.com/92563217/155459209-50421fb9-afed-463d-809a-6fb7de65628b.png)


- Tablet Resource Index

![Screen Shot 2022-02-23 at 11 38 21 PM](https://user-images.githubusercontent.com/92563217/155459233-40c26bc8-7f33-4efa-867a-a92296e65dce.png)

- Mobile Resource Index

![Screen Shot 2022-02-23 at 11 38 42 PM](https://user-images.githubusercontent.com/92563217/155459664-a7126967-a283-44ec-8295-77e16f438de4.png)


#### Component Tree

![Screen Shot 2022-02-24 at 10 28 56 AM](https://user-images.githubusercontent.com/92563217/155554709-c00aef06-77e2-4430-9560-c98a66dc120c.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Home.jsx
      |__ Navbar.jsx
      |__ Login.jsx
      |__ Signup.jsx
      |__ Items.jsx
      |__ ItemsCreate.jsx
      |__ ItemDetail.jsx
      |__ ProductEdit.jsx
      |__ Comments.jsx
      |__ CommentsCreate.jsx
|__ services/
      |__ apiConfig.js
      |__ items.js
      |__ users.js
      |__ reviews.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning            |    H     |     4 hrs      |     4 hrs     |    5 hrs    |
| Backend Schema      |    H     |     2 hrs      |      TBD      |     TBD     |
| Backend Routes      |    H     |     2 hrs      |      TBD      |     TBD     |
| Backend Controllers |    H     |     3 hrs      |      TBD      |     TBD     |
| Backend Models      |    H     |     4 hrs      |      TBD      |     TBD     |
| Backend testing/Gems|    H     |     3 hrs      |      TBD      |     TBD     |
| Frontend Users      |    H     |     4 hrs      |      TBD      |     TBD     |
| Frontend Items      |    H     |     4 hrs      |      TBD      |     TBD     |
| Frontend Reviews    |    H     |     4 hrs      |      TBD      |     TBD     |
| Frontend Other Comps|    H     |     4 hrs      |      TBD      |     TBD     |
| Frontend services   |    H     |     6 hrs      |      TBD      |     TBD     |
| Frontend Testing    |    H     |     5 hrs      |      TBD      |     TBD     |
| Frontend Styling    |    H     |     6 hrs      |      TBD      |     TBD     |
| Linting             |    H     |     2 hrs      |      TBD      |     TBD     |
| Debugging           |    H     |     4 hrs      |      TBD      |     TBD     |
| TOTAL               |          |     57 hrs     |      TBD      |     5 hrs   |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2022-02-25 at 12 52 38 AM](https://user-images.githubusercontent.com/92563217/155662025-a139bba4-d9f2-482b-af97-eff5a59c5540.png)

***

## Post-MVP

_The **ReVogue** PostMVP  is to make a shopping favorites list for each user where they can save for later and would return a 404 if the item was deleted from the site. I would like to make an edit button for the user that comment instead of just deleting their comment. Another feature I plan is to add a like or dislike button for the sellers so buyers know their experience. Overall I have more PostMVPS that I will work on after the course!_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

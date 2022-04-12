$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Starc",
        "Starc123"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "SuriyaVeeran17",
        "Music1710"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1809800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Starc\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Starc123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 23620577700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Starc",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 3145605800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Starc123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 965310100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1262952900,
  "status": "passed"
});
formatter.after({
  "duration": 279400,
  "status": "passed"
});
formatter.before({
  "duration": 594500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 723518300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 322869900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 234982200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 778911100,
  "status": "passed"
});
formatter.after({
  "duration": 172300,
  "status": "passed"
});
formatter.before({
  "duration": 152800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"SuriyaVeeran17\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Music1710\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1302537300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuriyaVeeran17",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 950516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music1710",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 467601300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 3184407800,
  "status": "passed"
});
formatter.after({
  "duration": 168700,
  "status": "passed"
});
formatter.before({
  "duration": 170200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User Select The \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Click The Search Button It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 17
    }
  ],
  "location": "Step_Def.user_Select_The(String)"
});
formatter.result({
  "duration": 3133022900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 483731000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 392490000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 483457000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 377819100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 280898700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 321611800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 375037500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2723012500,
  "status": "passed"
});
formatter.after({
  "duration": 153500,
  "status": "passed"
});
formatter.before({
  "duration": 136300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User Click The Continue Button It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 483360900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1329782600,
  "status": "passed"
});
formatter.after({
  "duration": 137000,
  "status": "passed"
});
formatter.before({
  "duration": 150000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User Book The Room And Payment Details In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-room-and-payment-details-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User Enter The Valid First Name",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User Enter The Valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter The Valid Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Choose The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Select The Select Month In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Select The Select Year In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Click The Book Now Button It Navigates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Valid_First_Name()"
});
formatter.result({
  "duration": 523656900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Valid_Last_Name()"
});
formatter.result({
  "duration": 365336900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 851369700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Valid_Credit_Card_Number()"
});
formatter.result({
  "duration": 467372200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Choose_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 503235800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Select_Month_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 428322300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Select_Year_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 457948000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 345329300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Book_Now_Button_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 326824200,
  "status": "passed"
});
formatter.after({
  "duration": 176800,
  "status": "passed"
});
});
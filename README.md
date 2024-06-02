# Orbital24-REORG

##Abstract:
This document is a continuation of our proposal, providing additional details and expanding on the ideas outlined previously. It also covers different aspect of our development process such as our design logic, development plan, wireframes. However, the features stated are subjected to changes due to various limitations and challenges we are facing. Thank you for taking the time to read this document. .We welcome any feedback to improve the project further. 

##Poster:  

##Video: 

##Proposed Level of Achievement: Apollo

##Aim
REORG aims to be an all-in-one academic management platform which allows NUS students to manage their academic schedule, course progress and planning. 

##Motivation
As university students, we often juggle many commitments. Beyond academics, we have part-time jobs, co-curricular activities, competitions, family responsibilities, and more. Balancing these can make it hard to meet our academic goals.

NUSMOD is a great tool for NUS students to plan their academics. However, it doesn’t help us track our academic progress, such as GPA and course requirements. Many of us end up using different tools like Google Sheets and Microsoft Excel to keep track of our progress. This means switching between platforms to check course requirements and module information.

To simplify this process, we aim to create a course planning platform that integrates resources from the university and NUSMOD. This platform will help NUS students easily plan their courses and track their progress.

Additionally, managing academic commitments would be easier with an integrated calendar. This calendar would allow us to edit and view academic activities, lesson schedules, and important dates like course registration and the academic calendar.

##Vision
REORG will be a powerful tool for NUS students to view and manage their academic activities. By integrating resources like NUSMOD and the university's websites, REORG simplifies course planning and progress tracking. It will help students manage their academic lives more effectively, allowing them to focus on their academic goals with ease.

##User Stories
1.	As a student, I can view and manage my academic events such as lesson schedules as well as deadlines for my assignments, so that I can better manage my academic life and not miss out any important deadlines and activities.
2.	As a student, I can plan my schedules by adding external events and manage assignment deadlines within each academic semester, so that I can integrate my academic and non-academic life. 
3.	As a student, I can keep track of my course progress, my course performance over the course, and history of the modules I have taken, so that I know how far I am from meeting my degree requirement and what is my projected GPA at the end of the course.
4.	As a student, I can plan modules and take same modules or tutorial with my friends, so that I can have a more enjoyable university life.

##Proposed Features

##API Design
We use Java Spring Boot to build our REST API. A layered architecture is followed where we organise the application into 4 different layers: controller, services, repository and entities. This ensures modularity as each layer has a specific responsibility and easier to maintain. 
Below showcase the relevant controllers (subject to changes) needed for our project: 

##Entity Relationship Diagram (ERD) (subject to changes)
REORG uses a relational database to manage the data needed for operations such as user authentication, storage of user course profile, journal entries as well as module details. By using a relational database, we can ensure data integrity and support complex query needed for the wed app. 
The database contains several interrelated tables which is shown the ERD below: 

##Initial Wireframe

##User Interface Design (Still in progress)
###Sign In Page

###Sign Up Page

##Sign In User Flow (subject to changes)

##Timeline and Development Plan (subject to changes)

##Tech Stack: 
•	React Typescript (frontend)
•	Java Spring Boot (backend, RESTful API)
•	MySQL (relational database)

##Project Log: 
Please refer to: Orbital24-6127-REORG 

# Professional-Note-Taker-CLI

## Your Task
As developers, students, or professionals, it’s easy to lose track of quick notes, reminders, and ideas. For this challenge, you will build a command-line note-taking application that allows users to create, view, search, and delete notes efficiently.

You will use the Inquirer package to collect user input and the native fs module to save notes as JSON data for persistence between sessions.

The application will be invoked with:

```
node index.js
```
Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video demonstrating its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```
AS A busy professional
I WANT to quickly create, view, search, and delete notes from the command line
SO THAT I can manage my tasks and ideas efficiently
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I choose to create a new note
THEN I am prompted for a note title and content, which are saved to a JSON file
WHEN I choose to view all notes
THEN I see a list of all saved note titles
WHEN I select a note from the list
THEN the full content of the note is displayed
WHEN I choose to delete a note
THEN I see a list of notes to select from, and the selected note is removed from the JSON file
WHEN I choose to search notes by keyword
THEN I am shown notes that match the keyword in their title or content
WHEN I exit the application
THEN my notes remain saved for the next time I open it
```

### Getting Started
Here are some guidelines to help you get started:

* Create a .gitignore file including node_modules/ and .DS_Store/ to avoid uploading unnecessary files to GitHub.

* Make sure your repo includes a package.json with required dependencies. Create one by running npm init before installing anything.

* Use the fs module to read from and write to a notes.json file for storing notes persistently.

* Organize your code with clear function separation for each action: create, view, search, and delete.

* Include a video walkthrough of your application's functionality, showing the user flow for each feature.

* Include screenshots demonstrating your prompts, note displays, and file structure to communicate the utility and organization of your project clearly to others.
Chill-Fill App
Video Streaming platform


Overview
This project is a video streaming web application built using React.js and Material-UI. It leverages RapidAPI to fetch video data. The application allows users to add videos, categorize them, and search for videos by ID, search term, or channel.

Features
Video Addition: Users can add new videos to the application.
Categorization: Videos can be categorized for easy navigation.
Search Functionality: Search for videos using video ID, search terms, or channel names.
Responsive UI: Built with Material-UI for a modern and responsive design.
Tech Stack
React.js: For building the user interface.
Material-UI: For styling and layout.
RapidAPI: For fetching video data from external sources.
Installation
Prerequisites
Node.js (v14 or later)
npm
Steps

1. Clone the repository
git clone https://github.com/Dev-Harshxl/Chill-Fill
cd video-streaming-app

2. Install dependencies
npm install

3. Setup environment variables
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key

4. Run the application
npm start

5. Open in browser
Visit http://localhost:3000 to see the application in action.


Usage
Adding a Video
To add a video, navigate to the "Add Video" section, fill in the necessary details such as video URL, title, and category, and submit the form.

Categorizing Videos
Videos can be assigned to categories during the addition process. These categories can be viewed and managed from the "Categories" section.

Searching for Videos
Use the search bar to find videos by entering a video ID, search term, or channel name. The results will be displayed in a list format.

API Integration
This project uses RapidAPI to fetch video data. Ensure you have set up your RapidAPI key in the .env file.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes relevant tests.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

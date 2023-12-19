Important note: We have included a requirements.txt file which includes the libraries you need to install
in order to run our website.
Specifically you might need to run:
    'npm install stream-chat-react' and 'pip install stream-chat'

Open two terminals on your computer. On one terminal, cd into the bubble directory and run 'npm start'.

On another terminal, cd into the src directory within the bubble directory and run 'python app.py'

Once on a local host on web browser:

    * the default screen should be the login/signup page

To view the webite screen on the correct Iphone screen:

    1. Right click anywhere on the current screen
    2. Select "Inspect" from the given list
    3. On the very top right of the browser there should be a dropdown that says
    "Dimensions Responsive" 
    4. After clicking this text, select "Iphone SE". 
    5. This should correctly format the screen that matches our code. 

When you open our app, you may login using the information from one of the users in our users.json file.
If you would like to create your own user, you may hit new user, and fill in the required information.
When you are redirected back to the login page, you may use your newly created credentials to login.
Once logged in you will be in the bubbles page. Clicking the hamburger menu icon lets you see the other
chats that are available. Clicking the name of the group (e.g. COMS4170) should display the members in
the group. Hitting the courses tab button shows you the courses for the user. Selecting one of those courses
shows the previously formed groups, and you can hit the plus button to create your own group. If you choose to 
join a previously formed group you can click on the group and then hit request to join. You can hit the profile
tab button to view your profile. You can hit the pencil icon to add some information about yourself to be displayed
on your profile. If you hit the settings icon and hit liked profiles, you can see your liked profiles. If you hit
import courses, it will take you through the simulation of importing courses. A lot of these actions are simulated,
as the app requires a large number of users to create an engaging experience.

We downloaded images from the internet that are all currently in the /src/images folder. 
We integrated the free tier of Stream library for messaging.
Our project files include .env files that store API key, API secret, etc. 
(which are needed to use the messaging functionalities. Thus, number of connections and 
API calls are something that contributes toward “free tier usage” – too many concurrent 
connections can result in overage (and potential charges). Feel free to use Jane Doe 
as a test user: test@gmail.com as the email and ‘pass’ as the password.







    
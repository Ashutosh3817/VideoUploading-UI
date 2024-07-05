/*
- Description of Each Component Files => 

Get Videos => * View Post * which helps load all the videos from the database
Add Videos => with the help of add video we add the video as well as update the video with the help of id 
Header => Display the header information
Shimmer => Just a fake website which loads before the component is rendered
View => With the help of view.js we view the video as well as their details like title,name,tags,description as well as Video 
Edit => With the help of edit video we update the information of video which display in the form of html forms


- Description of the Utils Files =>

baseURL => contains the baseurl where our backend is hosted on the server.
useOnlineStatus => With the help of the raect hook  we check whether is online or not with the help of event listeners.
VideoAPI =>  Here we fetch the data from database with the help of axios
videoService => We make the small component for saving,updating and deleting the videos.

*/
*/
How to start updating the project => First I am going to update in GetVideos or viewPost.js then we do the viewjs then we do editvideo.js and then booom annd then we work on springsession security

List Here the tasks when done =>
1) GetVideos or ViewPost
2) View.js
3) EditVideo.js
4) SpringSessionSecurity

add the view and edit link after making the component and setting the react-router-dom
*/

/* - Functionality Of Our Website
* Home Page
*  - Header
*  - Upload video
*  - Footer
*  - AddVideo
*  - Edit Video
*  - Delete Video
*/

/*
JUST CSS THINGS =>

1) Default Export 
2) Named Export
3) align items works on veritical axis
4) justify conent works on horizontal axis

*/

/* We use it in AddVideo Component => 

* The ProgressEvent Object handles events that occur when loading external resources.

* Progress Events
-- Event	                                                 -- Occurs When

1) onerror	                                  An error occurs while loading an external file
2) onloadstart                             	The browser starts looking for the specified file

* ProgressEvent Properties
-- Property	                                               --Returns
1) lengthComputable	                       If the length of the progress can be computable or not
2) loaded	                                             How much work has been loaded
3) total	                                            The total amount that will be loaded

*/
\* 
const [singleProgress, setSingleProgress] = useState(0);

const singleFileOptions = {
    uploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        setSingleProgress(percentage);
    }
};
Explanation:
State Initialization:

const [singleProgress, setSingleProgress] = useState(0);: This line initializes a state variable singleProgress with an initial value of 0 using the useState hook. 
setSingleProgress is a function used to update singleProgress.
singleFileOptions Object:

singleFileOptions is an object that contains an uploadProgress function. This function is likely used with an upload mechanism (e.g., axios or fetch) to track the progress of a 
file upload.

uploadProgress Function:
uploadProgress: (ProgressEvent) => { ... }: This function takes a ProgressEvent parameter, which typically contains information about the progress of the upload operation.

Calculating Percentage:
const { loaded, total } = ProgressEvent;
Destructures loaded (current bytes loaded) and total (total bytes to be loaded) from the ProgressEvent.
const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));: Calculates the percentage of the file that has been uploaded. It divides loaded and total by 1000 to convert bytes to kilobytes before calculating the percentage.
Updating State:

setSingleProgress(percentage);: Updates the singleProgress state variable with the calculated percentage. This causes React to re-render the component with the updated progress value.
*/

- npm install react-toastify

/*
- In React, a "toast" refers to a transient notification typically used to provide feedback to the user after an action has been performed. It is a small, non-intrusive message that appears near the bottom of the screen and fades away after a short period.

- Characteristics of a Toast:
* Transient: Toast messages are temporary and disappear automatically after a few seconds.

* Non-blocking: They do not disrupt the user's current workflow or interaction with the application.

* Informative: Toasts convey important information, such as success messages, warnings, errors, or other relevant updates.

* Minimalistic: They are usually small in size, often consisting of just text or a simple icon with a brief message.

- Implementation of Toasts in React:
* To implement toast notifications in a React application, you typically use a library that provides a component designed for this purpose. Some popular libraries for toast notifications in React include:

* react-toastify: A highly customizable toast notification library for React.
* react-toast-notifications: Another library offering flexible and customizable toast notifications.
* Material-UI: The Material-UI library includes a Snackbar component that can be used effectively as a toast.
*/

/*
- In React, htmlFor is a JSX attribute used to associate a label element with a form control, typically an input element. It is equivalent to the for attribute in standard HTML, but since for is a reserved keyword in JavaScript, React uses htmlFor instead.

- Purpose of htmlFor:
The htmlFor attribute is used within a <label> element to specify which form element it is associated with. This association benefits accessibility and usability in several ways:

- Accessibility: Screen readers use the association between labels and form controls to improve navigation and understanding for users who rely on auditory cues.

- Usability: Clicking on a label associated with an input element focuses or activates that input element, making it easier for users to interact with forms.
*/

/*
we use React Collapse With the help of useCollapse HOOK which we import from React Collased
Component-wrapper for collapse animation for elements with variable (and dynamic) height
npm install --save react-collapse
*/
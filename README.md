
## Project Summary

This project is a **Friend Tracker Web App** where users can manage and maintain their relationships by tracking communication, setting goals, and logging interactions like calls, texts, and video chats.

---

### Frontend

* **React.js** → Main library for building UI
* **React Router** → Page routing (Home, Timeline, Friend Details, 404)
* **Context API** → State management (for sharing friend data & timeline)

---

### Styling

* **Tailwind CSS** *(or your CSS system)*
  → Used for responsive and modern UI design
* Custom CSS → For Figma design matching

---

### UI & UX Features

* Responsive Navbar with active link highlighting
* Figma-based layout implementation
* Card-based UI design for friends and stats
* Two-column layout for Friend Details page

---

### Data Handling

* **Local JSON (friends.json)**
  → Stores all friend data (name, email, status, etc.)
* Dynamic rendering using `.map()`


* **React Toastify**
  → Used for showing toast notifications when:

  * Call 
  * Text 
  * Video 

---

### Functional Features

* Add timeline entries dynamically on button click
* Auto-generate interaction titles
* Show current date in timeline

---

### Routing Pages

* Home Page → Friend list + Banner
*  Timeline Page → Interaction history
*  Friend Details Page → Detailed info + actions
*  404 Page → Invalid route handling

---

###  Extra Features

* Responsive design (mobile, tablet, desktop)
* Reload-safe routing (no error on refresh after deploy)

---

##  Key Components Used

* `Navbar.jsx`
* `Banner.jsx`
* `FriendCard.jsx`
* `FriendDetails.jsx`
* `Timeline.jsx`
* `Footer.jsx`
* `NotFound.jsx`

---


## Core Concepts Applied

* Component-based architecture
* Props & state management
* Conditional rendering
* Event handling
* Dynamic UI updates
* Responsive layout design

---

##  Responsiveness

* Mobile-first design
* Grid & Flexbox used
* Breakpoints for different screen sizes

---

## Development Tools

* VS Code
* Git & GitHub
* Browser DevTools

---

##  Conclusion

In this project, I focused on:

* Converting Figma design into a real application
* Writing clean and reusable React components
* Managing state efficiently
* Creating a user-friendly and responsive UI

---


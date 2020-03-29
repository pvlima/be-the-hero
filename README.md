# Be The Hero

OmniStack Week is an online workshop produced by Rocketseat. This is version 11, where a complete application (backend, frontend and mobile) with a single language, Javascript, is developed. The project "Be The Hero", is an application to register NGOs and cases registered by them so that other people can help to solve them.

To clone the repository, run the following command on the terminal:

```git clone https://github.com/pvlima/be-the-hero.git```

## Installation

### Requirements

```git, node, express, knex, sqlite, react, react-native, expo```

Clone the repository using git or download it.

To start the **API** use the commands:
```
cd backend
npm install
npm run start
```

To start the React **Frontend** use the commands:

```
cd frontend
npm install
npm run start
```

Once the process is finished, the ``http://localhost: 3000`` page containing the Project will automatically open in your browser.



To test React Native's **Mobile**, put the address of your server in the ``src/services/api.js`` file, and execute the commands:

```
npm install -g expo-cli
cd mobile
npm install
expo start
```
Once the process is finished, the ``http://localhost:19002`` page will automatically open in your browser. Connect your emulator, or test the app via ``LAN``: download the *Expo* app from the Play Store or App Store and scan the QR code that appears on the page.

## The Project


![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77811449-13935d80-7079-11ea-9123-4c8ff90a696b.png)


### Back-End

Api developed in NodeJS and Express.

### Front-End (Web e Mobile)

Developed with React for web and React Native for mobile. Communication with the api is done using the axios library.

On the web page, an NGO can log in and register cases so that others can help.

In the mobile app, people can see all the cases and contact the NGO via WhatsApp or Email.

💻 Web Version
 
![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77805427-9c51cf80-7060-11ea-88a1-ff3014ffe8ce.gif)
  
:iphone: Mobile Version

![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77805360-72001200-7060-11ea-9bc3-dd313a195bf8.gif)

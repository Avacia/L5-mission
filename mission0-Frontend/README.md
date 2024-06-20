<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project & Usage</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites & Installation </a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project & Usage

Create a website from a prototype of a NZ Marketing Association Webpage with mobile responsive required. 

![NZ Marketing Association Prototype Phone Image](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/prototypePhone.png)
![NZ Marketing Association Prototype Web Image](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/prototypeWeb.png)



This project is for NZ Marketing Association that allow user to find the crypto price for the current market.

![NZ Marketing Association](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/main.png)



    The folder structure will look like the image below:
![React folder structure](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/folderStructure.png)

    The main feature of the webpage:
    
    - The headbar menu will switch to a hamburger menu when the screen size is smaller than 768px.
      - The hamburger menu will contain a list of categories.
      
    - Animation of headSection used react-spring & typewriter-effect library.

    
  ![Mobile Responsive](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/phoneVersion.png)
  ![Ipad Responsive](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/ipadVersion.png)


     
    - Animation of icons images used lottie-react library.

    
  ![Head Section](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/headsection.png) 


  
    - The mainSection will contain a search bar, a list of crypto coins, and a pagination.
      - The search bar will be used to search for a crypto coin.(Not function at the moment)
      - The list of crypto coins will be fetched from an API name coinGecko.
      - The pagination will be used to navigate between pages.
      - Each pages will only display 12 crypto coins.

    - The footer will contain a list of Copy right info.

  ![Body Section](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/bodySection.png)
  ![Foot Section](https://github.com/Avacia/L5-mission/blob/main/mission0-Frontend/public/footSection.png) 


 
    

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section list all major frameworks/libraries used in the project.

* [Fortawesome](https://fontawesome.com/icons/fort-awesome?f=brands&s=solid)
* [framer-motion](https://www.framer.com/motion/)
* [lottie-react](https://lottiefiles.com/)
* [react-query](https://www.npmjs.com/package/react-query)
* [react-spring](https://react-spring.dev/)
* [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project is for NZ Marketing Association, using a given prototype to build an actual
webpage and required mobile responsive. To run the project, you will have to follow the
steps below.

### Prerequisites & Installation

This is an command that you will need to use before you start the project.

* Install npm
  ```sh
  npm install npm@latest -g
  ```
* Create Vite & React project
  ```sh
  npm create vite@latest
  ```
* Install Fortawesome
  ```sh
  npm i --save @fortawesome/fontawesome-svg-core
  ```
  ```sh
  npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/free-regular-svg-icons
  npm i --save @fortawesome/free-brands-svg-icons
  ```
  ```sh
  npm i --save @fortawesome/react-fontawesome@latest
  ```
* Install Framer-motion
  ```sh
  npm install framer-motion
  ```
* Install Lottie
  ```sh
  npm install lottie-react
  ```
* Install React Query
  ```sh
  npm install react-query
  ```
* Install React Spring
  ```sh
  npm install react-spring
  ```
* Install Typewriter Effect
  ```sh
  npm install typewriter-effect
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Webpage animation and display
- [ ] Mobile Responsive
- [ ] Hamburger Menu List
- [ ] Content Pagination
- [ ] API Fetching
- [x] Search Bar functionality

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Yen Wang - [@avaciaroger](https://www.youtube.com/channel/UCBp5I4NfVnBcjareGQDfPmQ) - wang80139@gmail.com

Project Link: [https://github.com/Avacia/L5-mission.git](https://github.com/Avacia/L5-mission.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Those library are very helpful while building animation and free API link.

* [Font Awesome](https://fontawesome.com)
* [Framer_motion](https://www.framer.com/motion/)
* [Lottie_react](https://lottiefiles.com/)
* [CoinGecko](https://www.coingecko.com/)
* [{Json} Placeholder](https://jsonplaceholder.typicode.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

/* Authors: Nick Sturch-Flint - 100303769 & Scott Alton - 100762638
 * Date   : 2021-03-04
 * Program: This is the javascript page that holds our functions that hold our website together.
 */

"use strict";

//#region HOME/INDEX PAGE CONTENT
(function () 
{
  function displayHome() 
  {
    //Sets the default Background Image and Colour
    document.body.style.backgroundColor = "#49A4B0";
    document.body.style.backgroundImage =
      "url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";

    //Updates the background when the Finn Button is pressed!
    function finnBackground() 
    {
      document.body.style.backgroundImage = "url('Assets/finn.png')";
    }
    //Updates the background when the Chef Button is pressed!
    function chefBackground() 
    {
      document.body.style.backgroundImage = "url('Assets/chef.jpg')";
    }
    //Updates the background when the Revert Button is pressed!
    function revertBackground() 
    {
      document.body.style.backgroundImage =
        "url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
    }

    // Step 1. document.createElement
    let homeTitle = document.createElement("h1");
    let homeParagraph = document.createElement("p");
    let backgroundButtons = document.createElement("div");
    let finnButton = document.createElement("button");
    let chefButton = document.createElement("button");
    let revertButton = document.createElement("button");

    // Step 2. configure the elements
    homeTitle.setAttribute("id", "homeHeader");
    homeParagraph.setAttribute("id", "homeParagraph");
    backgroundButtons.setAttribute("id", "buttonNav");

    //Button Configuration
    finnButton.setAttribute("id", "finnButton");
    finnButton.setAttribute("class", "btn-lg btn-secondary outline");
    finnButton.textContent = "Finn!";
    finnButton.addEventListener("click", finnBackground);
    chefButton.setAttribute("id", "chefButton");
    chefButton.setAttribute("class", "btn-lg btn-secondary outline");
    chefButton.textContent = "Chef!";
    chefButton.addEventListener("click", chefBackground);
    revertButton.setAttribute("id", "revertButton");
    revertButton.setAttribute("class", "btn-lg btn-secondary outline");
    revertButton.textContent = "Original!";
    revertButton.addEventListener("click", revertBackground);

    //Home Page Main Content
    homeTitle.textContent = "Welcome To WEBD6201 - Group 1";
    homeParagraph.textContent =
      "This is the home page of the site that we will be building over the course of our semester in WEBD 6201. With Tom Tsiliopoulos as our professor our site will be legendary!";
    backgroundButtons.innerHTML = `<p class="text-light outline">Click on of these buttons to change the background you would like while on the home page!</p>`;
    backgroundButtons.appendChild(finnButton);
    backgroundButtons.appendChild(chefButton);
    backgroundButtons.appendChild(revertButton);

    // Step 3. select the parent element
    let mainContent = document.getElementsByTagName("main")[0];

    // Step 4. Add / Insert the element
    mainContent.appendChild(homeTitle);
    mainContent.appendChild(homeParagraph);
    mainContent.appendChild(backgroundButtons);
    mainContent.style.background = "rgba(46,46,46,.94)";
    mainContent.style.borderRadius = ".7rem";
    mainContent.style.marginTop = "80px";
    mainContent.classList.add("w-75", "p-5");
    mainContent.style.maxWidth = "800px";
    homeTitle.className = "text-light outline";
    homeParagraph.className = "text-light outline";
  }
  //#endregion

  //#region ABOUT PAGE CONTENT
  function displayAbout() {
    // Grab container element
    let container = document.querySelector(".container");

    // Heading element
    let heading = document.createElement("h1");
    heading.innerText = "Meet Scott & Nick";
    heading.style.textDecoration = "underline";
    heading.style.textDecorationColor = "green";

    // Inject page heading into the DOM
    container.appendChild(heading);

    // About Scott container and contents
    let aboutScottContainer = document.createElement("div");
    let aboutScottTextContainer = document.createElement("div");
    aboutScottTextContainer.innerHTML = '<h3 class="pb-4">Scott Alton</h3>';
    let aboutScottText = document.createElement("p");
    aboutScottContainer.classList.add(
      "my-5",
      "border-bottom",
      "p-4",
      "justify-content-center"
    );
    aboutScottTextContainer.classList.add("col-lg-6", "p-4");
    aboutScottText.innerText =
      "I am a developer based in Whitby, Ontario. I enjoy working with JavaScript, Ruby on Rails,\
       and C#. Before coming to Durham College and pursuing a change in career direction, I worked as a cook and musician, and also \
       teach guitar and piano lessons. I love creating things from scratch and breaking down complex problems.";

    // Inject Scott's about text into about container
    aboutScottTextContainer.appendChild(aboutScottText);

    // Button to view Scott's resume
    let scottResumeButton = document.createElement("a");
    scottResumeButton.innerText = "View Resume";
    scottResumeButton.classList.add("btn", "btn-success");
    scottResumeButton.setAttribute("href", "./Assets/ScottAltonResume.pdf");
    scottResumeButton.setAttribute("target", "_blank");
    aboutScottTextContainer.appendChild(scottResumeButton);

    // Scott image
    let aboutScottImage = document.createElement("div");
    aboutScottImage.innerHTML = `<img src="./Assets/scottaltonpic.jpg" class="col-lg-6" />`;
    aboutScottImage.classList.add("col-lg-4", "about-img");
    aboutScottContainer.classList.add("row");

    // Inject elements into about container
    aboutScottContainer.appendChild(aboutScottTextContainer);
    aboutScottContainer.appendChild(aboutScottImage);

    // About Nick container and contents
    let aboutNickContainer = document.createElement("div");
    let aboutNickTextContainer = document.createElement("div");
    aboutNickContainer.classList.add("my-5", "p-4", "justify-content-center");
    aboutNickTextContainer.innerHTML = "<h3>Nick Sturch-Flint</h3>";
    let aboutNickText = document.createElement("p");
    aboutNickTextContainer.classList.add("col-lg-6", "p-4");
    aboutNickText.innerText =
      "Nick is a full-stack developer based in Oshawa, Ontario. I enjoy working with C#, C++, Java, PHP/HTML/CSS, JavaScript, and MySQL. Before coming to Durham College for Computer Programming Analyst, I worked as an administrator with Re/Max. \
      As a hobby I enjoy playing guitar or video games, reading a book, or writing my own! Learning new things and finding my own solutions to problems are something I enjoy and welcome in the work place!";
    aboutNickTextContainer.appendChild(aboutNickText);

    // Button to view Nick's resume
    let nickResumeButton = document.createElement("a");
    nickResumeButton.innerText = "View Resume";
    nickResumeButton.classList.add("btn", "btn-success");
    nickResumeButton.setAttribute("href", "./Assets/NickResume.pdf");
    nickResumeButton.setAttribute("target", "_blank");

    // Nick image element
    let aboutNickImage = document.createElement("div");
    aboutNickImage.innerHTML = `<img src="./Assets/nick.png" class="col-lg-10" />`;
    aboutNickImage.classList.add("col-lg-4", "about-img");
    aboutNickContainer.classList.add("row");

    // Inject elements into about container
    aboutNickContainer.appendChild(aboutNickImage);
    aboutNickTextContainer.appendChild(nickResumeButton);
    aboutNickContainer.appendChild(aboutNickTextContainer);

    // Inject both about containers into the DOM
    container.appendChild(aboutScottContainer);
    container.appendChild(aboutNickContainer);
  }
  //#endregion

  //#region PROJECTS/PRODUCTS PAGE CONTENT
  function displayProjects() {
    // Store array of projects completed by Scott
    let scottProjects = [
      {
        name: "The Shoppies Awards",
        technologies: ["react", "css", "bootstrap"],
        image: "./Assets/shoppies.jpg",
        github: "https://github.com/alto4/ShoppiesAwardsApp",
        demo: "https://shoppies-awards-2021.netlify.app/",
      },
      {
        name: "Currency Converter",
        technologies: ["react", "css", "bootstrap"],
        image: "./Assets/currency-converter.jpg",
        github: "https://github.com/alto4/SACurrencyExchange",
        demo: "https://sacurrency.herokuapp.com",
      },
      {
        name: "SA Corp. CRM",
        technologies: ["php", "postgresql", "bootstrap"],
        image: "./Assets/sacorp.jpg",
        github:
          "https://github.com/alto4/SACorpPHP/tree/master/htdocs/WEBD3201/Lab4/lab4",
        demo: "https://screenrec.com/share/8Lu5gH9Wwm",
      },
    ];

    // Store array of projects completed by Nick
    let nickProjects = [
      {
        name: "C++ Input/Output Application",
        technologies: ["C++"],
        image: "./Assets/nickproj1.jpg",
        github: "https://github.com/GarlicButterBoy/OOP3200-F2020-Lab5",
        demo: "https://www.youtube.com/watch?v=_1iBvqUpu88",
      },
      {
        name: "JavaFX",
        technologies: ["Java", "JavaF"],
        image: "./Assets/nickproj2.jpg",
        github: "https://github.com/GarlicButterBoy/OOP3200-Nick-Kaif-JavaLab5",
        demo: "https://www.youtube.com/watch?v=rARQPHTxDQ4",
      },
      {
        name: "Simple Shares Database",
        technologies: ["C#"],
        image: "./Assets/nickproj1.png",
        github: "https://github.com/GarlicButterBoy/Lab-3---NickSturchFlint",
        demo: "#",
      },
    ];

    // Build projects container
    let container = document.querySelector(".container");
    let projectsContainer = document.createElement("div");
    projectsContainer.classList +=
      "container mx-auto row g-lg-3 justify-content-center projects";
    container.after(projectsContainer);

    // String to store HTML for project cards
    let projectsHTML = "";

    /**
     * displayProjectCards - renders an array of project objects into DOM
     * @param {Array} projects
     */
    function displayProjectCards(projects) {
      projects.forEach((project) => {
        const { name, technologies, image, github, demo } = project;
        projectsHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 my-2 mx-2">
              <h4>${name}</h4>
              <img src="${image}" class="mx-auto" />
              <div class="row p-4 ">
                <a href="${github}" target="_blank" class="col-6 btn btn-dark">Code</a>
                <a href="${demo}" target="_blank" class="col-6 btn btn-success">Demo</a>
              </div>
            </div>
          `;
      });
    }

    // Call displayProjects function to render HTML for all project cards
    displayProjectCards([...scottProjects, ...nickProjects]);

    document.querySelector(".projects").innerHTML += projectsHTML;
  }
  //#endregion

  //#region SERVICES PAGE CONTENT
  function displayServices() {
    // Store array of services
    let scottServices = [
      {
        serviceType: "Web Development",
        name: "Scott Alton",
        image: "./Assets/webdev.jpeg",
        content:
          "Help improve your businesses online presence with a new, customized website.",
      },
      {
        serviceType: "Web Design",
        name: "Scott Alton",
        image: "./Assets/design.jpeg",
        content:
          "Interested in a new look for your brand? N/S has the design skills to create a new brand profile.",
      },
      {
        serviceType: "Copywriting",
        name: "Scott Alton",
        content:
          "Worried about your spelling and grammar? Let our in-house copywriters create polished content.",
        image: "./Assets/copywriting.jpeg",
      },
    ];

    let nickServices = [
      {
        serviceType: "Software Development",
        name: "Nicholas Sturch-Flint",
        image:
          "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content:
          "Have an idea for an app or website? Reach out to us and we can give you a quote on it!",
      },
      {
        serviceType: "Application Support",
        name: "Nicholas Sturch-Flint",
        image:
          "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        content:
          "Already have a system in place, but don't know how (or don't have time!) to keep it updated? \
                    After some information collection about the system, we'll be able to help you keep it in check!",
      },
      {
        serviceType: "System Development Lifecycle",
        name: "Nicholas Sturch-Flint",
        image:
          "https://ak.picdn.net/shutterstock/videos/1020779143/thumb/11.jpg",
        content:
          "Have a system that you want to build but don't know where to start? Don't worry! With continued communication \
                    we will help to walk you through the life-cycle as well as building your dream project!",
      },
    ];

    // Create container to store services cards
    let containerOne = document.querySelector(".container");
    let servicesContainer = document.createElement("div");
    servicesContainer.classList +=
      "container mx-auto row g-lg-3 mb-5 justify-content-center services mb-3";
    containerOne.after(servicesContainer);

    // Empty string to store HTML containing services cards
    let servicesHTML = "";

    /**
     * displayServiceCards - renders an array of project objects into DOM
     * @param {Array} services
     */
    function displayServiceCards(services) {
      services.forEach((service) => {
        const { name, serviceType, image, content } = service;
        servicesHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 mb-5 mx-2">
              <h4>${serviceType}</h4>
              <h6>${name}</h6>
              <p>${content}</p>
              <img src="${image}" class="mx-auto services-img mb-3" />
            </div>
          `;
      });
    }

    // Call displayServiceCards function to render HTML for all project cards
    displayServiceCards([...scottServices, ...nickServices]);

    document.querySelector(".services").innerHTML += servicesHTML;
  }
  //#endregion

  //#region CONTACT PAGE CONTENT
  /**
   * A function to display contact.html
   */
  function displayContact() {
    let heading = document.querySelector("h1");
    let subHeading = document.createElement("p");
    subHeading.className += "lead w-50 mb-4 text-bold mx-auto";
    subHeading.innerText =
      "Get in touch to discuss your next project today! We are always looking to take on exciting work.";
    heading.after(subHeading);

    let messageArea = document.getElementById("messageArea");
    messageArea.hidden = true;

    // form validation
    let fullName = document.getElementById("fullName");
    fullName.addEventListener("blur", function () {
      if (fullName.value.length < 2) {
        fullName.focus();
        fullName.select();
        messageArea.hidden = false;
        messageArea.className = "alert alert-danger w-50 mx-auto";
        messageArea.textContent = "Please enter an appropriate Name";
      } else {
        messageArea.removeAttribute("class");
        messageArea.hidden = true;
      }
    });

    // sendButton - submits form and redirects user to homepage once validated
    let sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function (event) {
      event.preventDefault();
      let contact = new Contact(
        fullName.value,
        contactNumber.value,
        emailAddress.value
      );
      console.log(contact.serialize);

      // Check if the serialized object exists once validations are performed, and so, redirect user to homepage
      if (contact.serialize()) {
        localStorage.setItem(
          (localStorage.length + 1).toString(),
          contact.serialize()
        );
      }

      location.href = "index.html";
    });
  }
  //#endregion

  //#region CONTACT LIST DISPLAY PAGE CONTENT
  /**
   * A function to display contact-list.html
   */
  function displayContactList() {
    // Check if records exist in local store
    if (localStorage.length > 0) {
      let contactList = document.getElementById("contactList");
      let data = "";

      // Loop through each record in localStorage and render
      for (let index = 0; index < localStorage.length; index++) {
        let contactData = localStorage.getItem((index + 1).toString());

        let contact = new Contact();
        contact.deserialize(contactData);

        data += `<tr>
                  <th scope="row">${index + 1}</th>
                  <td>${contact.FullName}</td>
                  <td>${contact.ContactNumber}</td>
                  <td>${contact.EmailAddress}</td>
                  </tr>`;
      }
      contactList.innerHTML = data;
    }
  }
  //#endregion

  function displayLogin() {
    let messageArea = $("#messageArea");
    messageArea.hide();

    $("#submitButton").on("click", function () {
      let messageArea = $("#messageArea");
      messageArea.hide();

      $("#submitButton").on("click", function () {
        let username = $("#userName");
        let password = $("#password");
        let success = false;
        let newUser = new core.User();

        $.get("./Data/users.json", function (data) {
          for (const user of data.users) {
            if (
              username.val() == user.Username &&
              password.val() == user.Password
            ) {
              newUser.fromJSON(user);
              success = true;
              break;
            }
          }

          if (success) {
            sessionStorage.setItem("user", newUser.serialize());

            messageArea.removeAttr("class").hide();
           
            username.val() = "";
            password.textContent = "";

            location.href = "contact-list.html";
          } else {
            username.trigger("focus").trigger("select");
            messageArea
              .show()
              .addClass("alert alert-danger")
              .text("Error: Invalid login information");
          }
        });
      });
    });
  }

  function displayRegister() {}

  /**
   * A function to load all of the pages
   */
  function Start() {
    // Dynamically update Products nav link to Projects
    document.querySelectorAll("nav ul li a")[1].innerHTML =
      '<i class="fa fa-code"></i> Projects';

    // Dynamically generate footer navbar
    let mainContent = document.querySelector("main");

    // Create footer
    let footer = document.createElement("footer");
    footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> Copyright N/S Web Solutions, 2021.</p>
        </nav>
        `;

    // Inject footer into bottom of each page
    mainContent.after(footer);

    // Create new nav link item and inject into navbar after about us
    const navLinkItem = document.createElement("li");
    navLinkItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.setAttribute("href", "human-resources.html");
    navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
    navLinkItem.appendChild(navLink);

    // Insert HR link into navbar
    document.querySelectorAll("nav ul li")[3].after(navLinkItem);

    //A switch-case that checks for the title of the current .html page and displays a different display funciton depending
    switch (document.title) {
      case "Home":
        displayHome();
        break;
      case "About":
        displayAbout();
        break;
      case "Projects":
        displayProjects();
        break;
      case "Services":
        displayServices();
        break;
      case "Contact":
        displayContact();
        break;
      case "Contact-List":
        displayContactList();
        break;
      case "Login":
        displayLogin();
        break;
      case "Register":
        displayRegister();
        break;
    }
  }
  window.addEventListener("load", Start);
})();

/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";
/* Example of a class being created with brand new functions
let myContact = 
{
  "firstName":"Nick SF",
  "contactNumber":"905-123-4567",
  "emailAddress":"email@test.com",
  "saysHello":function() { console.log(`${fullName} says Hello!`); },
  "someOtherObject":{  "friendsList":["Tony", "Stephen", "Peter"]  }

};*/


(function()
{

    function displayHome()
    {
      document.body.style.backgroundColor = "#49A4B0";
      document.body.style.backgroundImage = "url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";

      function finnBackground()
      {
        document.body.style.backgroundImage = "url('Assets/finn.png')";
      }
      function chefBackground()
      {
        document.body.style.backgroundImage = "url('Assets/nick.jpg')";
      }
      function revertBackground()
      {
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
      }

      //document.querySelector("body").style.background = "url(../Assets/finn.png)";
      
        //let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1";
        //let paragraphOneElement = document.getElementById("paragraphOne");

        //paragraphOneElement.textContent = paragraphOneText;
        //paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let homeTitle = document.createElement("h1");
        let homeParagraph = document.createElement("p");
        let backgroundButtons = document.createElement("div");
        let finnButton = document.createElement("button");
        let chefButton = document.createElement("button");
        let revertButton = document.createElement("button");
        //let newParagraph = document.createElement("p");

        // Step 2. configure the elements
        homeTitle.setAttribute("id","homeHeader");
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
        homeParagraph.textContent = "This is the home page of the site that we will be building over the course of our semester in WEBD 6201. With Tom Tsiliopoulos as our professor our site will be legendary!";
        backgroundButtons.innerHTML =
        `<p class="text-light outline">Click on of these buttons to change the background you would like while on the home page!</p>`;
        backgroundButtons.appendChild(finnButton);
        backgroundButtons.appendChild(chefButton);
        backgroundButtons.appendChild(revertButton);

        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];

        // Step 4. Add / Insert the element
        mainContent.appendChild(homeTitle);
        mainContent.appendChild(homeParagraph);
        mainContent.appendChild(backgroundButtons);

        homeTitle.className = "text-light outline";
        homeParagraph.className = "text-light outline";


        
        //newParagraph.className = "fs-6";

        // another way of injecting content
        //let paragraphDiv = document.createElement("div");
        //let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        //paragraphDiv.innerHTML = paragraphThree;

        // INSERTIONS
        // example of inserting before a node
        //newParagraph.before(paragraphDiv);
        // example of inserting after a node
        //newParagraph.after(paragraphDiv);

        // DELETIONS
        // EXAMPLE of removing a single element
        //paragraphOneElement.remove();
        // EXAMPLE of removeChild
        //mainContent.removeChild(paragraphOneElement);
        
        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

    }

    function displayAbout()
    {
      // Grab container element
      let container = document.querySelector(".container");

      // Heading
      let heading = document.createElement("h1");
      heading.innerText = "Meet Scott & Nick";
      heading.style.textDecoration = "underline";
      heading.style.textDecorationColor = "green";
      container.appendChild(heading);
      
      // About Scott 
      let aboutScottContainer = document.createElement("div");
      let aboutScottTextContainer = document.createElement("div");
      aboutScottTextContainer.innerHTML = '<h3 class="pb-4">Scott Alton</h3>';
      let aboutScottText = document.createElement("p");
      aboutScottContainer.classList.add("my-5", "border-bottom", "p-4", "justify-content-center");
      aboutScottTextContainer.classList.add("col-lg-6", "p-4");
      aboutScottText.innerText = "Scott is a full-stack developer based in Whitby, Ontario. I enjoy woring with JavaScript, Ruby on Rails,\
       and C#. Before coming to Durham College and pursuing a change in career direction, I worked as a cook and musician, and also \
       teach guitar and piano lessons. I love creating things from scratching and breaking down complex problems.";
      
      aboutScottTextContainer.appendChild(aboutScottText);
            
      // Button to view Scott resume
      let scottResumeButton = document.createElement("a");
      scottResumeButton.innerText = "View Resume";
      scottResumeButton.classList.add("btn", "btn-success");
      scottResumeButton.setAttribute("href", "./Assets/ScottAltonResume.pdf");
      scottResumeButton.setAttribute("target", "_blank");
      aboutScottTextContainer.appendChild(scottResumeButton);

      // Scott image
      let aboutScottImage = document.createElement("div");
      aboutScottImage.innerHTML = `<img src="../Assets/scottaltonpic.jpg" class="col-lg-6" />`
      aboutScottImage.classList.add("col-lg-4");
      aboutScottContainer.classList.add("row");
      
      // Inject elements into about container
      aboutScottContainer.appendChild(aboutScottTextContainer);
      aboutScottContainer.appendChild(aboutScottImage);

      // About Nick
      let aboutNickContainer = document.createElement("div");
      let aboutNickTextContainer = document.createElement("div");
      aboutNickContainer.classList.add("my-5", "p-4", "justify-content-center");
      aboutNickTextContainer.innerHTML = "<h3>Nick Sturch-Flint</h3>";
      let aboutNickText = document.createElement("p");
      aboutNickTextContainer.classList.add("col-lg-6", "p-4");
      aboutNickText.innerText = "Nick is a full-stack developer based in Oshawa, Ontario. I enjoy woring with JavaScript, Ruby on Rails,\
       and C#. Before coming to Durham College and pursuing a change in career direction, I worked as a cook and musician, and also \
       teach guitar and piano lessons. I love creating things from scratching and breaking down complex problems.";
      aboutNickTextContainer.appendChild(aboutNickText);
      
      
      // Button to view Nick resume
      let nickResumeButton = document.createElement("a");
      nickResumeButton.innerText = "View Resume";
      nickResumeButton.classList.add("btn", "btn-success");
      nickResumeButton.setAttribute("href", "./Assets/ScottAltonResume.pdf");
      nickResumeButton.setAttribute("target", "_blank");
      
      // Nick image element 
      let aboutNickImage = document.createElement("div");
      aboutNickImage.innerHTML = `<img src="../Assets/nick.jpg" class="col-lg-6" />`
      aboutNickImage.classList.add("col-lg-4");
      aboutNickContainer.classList.add("row");
      
      // Inject elements into about container
      aboutNickContainer.appendChild(aboutNickImage);
      aboutNickTextContainer.appendChild(nickResumeButton);
      aboutNickContainer.appendChild(aboutNickTextContainer);
      
      container.appendChild(aboutScottContainer);
      container.appendChild(aboutNickContainer);
       
    }

    function displayProjects()
    {
      // Store array of projects
      let scottProjects = [
        {
          name: "The Shoppies Awards",
          technologies: ["react", "css", "bootstrap"],
          image: "./Assets/shoppies.jpg",
          github: "https://github.com/alto4/ShoppiesAwardsApp",
          demo: "https://shoppies-awards-2021.netlify.app/" 
        },
        {
          name: "Currency Converter",
          technologies: ["react", "css", "bootstrap"],
          image: "./Assets/currency-converter.jpg",
          github: "https://github.com/alto4/SACurrencyExchange",
          demo: "https://sacurrency.herokuapp.com" 
        },
        {
          name: "SA Corp. CRM",
          technologies: ["php", "postgresql", "bootstrap"],
          image: "./Assets/sacorp.jpg",
          github: "https://github.com/alto4/SACorpPHP/tree/master/htdocs/WEBD3201/Lab4/lab4",
          demo: "https://screenrec.com/share/8Lu5gH9Wwm" 
        },
      ];

      let nickProjects = [
        {
          name: "Sweet Project #1",
          technologies: ["html", "css", "bootstrap"],
          image: "./Assets/finnlogo.png",
          github: "#",
          demo: "#" 
        },
        {
          name: "Sweet Project #2",
          technologies: ["html", "css", "bootstrap"],
          image: "./Assets/finnlogo.png",
          github: "#",
          demo: "#" 
        },
        {
          name: "Sweet Project #3",
          technologies: ["html", "css", "bootstrap"],
          image: "./Assets/finnlogo.png",
          github: "#",
          demo: "#" 
        },
      ]

      let container = document.querySelector(".container");
      let projectsContainer = document.createElement("div");
      projectsContainer.classList += "container mx-auto row projects";
      container.after(projectsContainer);
      let projectsHTML = "";

      /**
       * displayProjects - renders an array of project objects into DOM
       */
      function displayProjects(projects) {
        projects.forEach(project => {
          const { name, technologies, image, github, demo } = project;
           projectsHTML += `
            <div class="card text-center col-md-6 col-lg-4 p-4">
              <h4>${name}</h4>
              <img src="${image}"class="mx-auto" />
              <div class="row p-4">
                <a href="${github}" target="_blank" class="col-6 btn btn-dark">Code</a>
                <a href="${demo}" target="_blank" class="col-6 btn btn-success">Demo</a>
              </div>
            </div>
          `;
        });
      }

      displayProjects([...scottProjects, ...nickProjects]);

      document.querySelector('.projects').innerHTML += projectsHTML;
    }

    function displayServices()
    {

    }

    function displayContact()
    {

        let heading = document.querySelector("h1");
        let subHeading = document.createElement("p");
        subHeading.className += "lead w-50 mb-4 text-bold mx-auto";
        subHeading.innerText = "Get in touch to discuss your next project today! We are always looking to take on exciting work."
        heading.after(subHeading);

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        // form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger w-50 mx-auto";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }  
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            //event.preventDefault();
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
            console.log(contact.serialize());
            
            if(contact.serialize()) //checking if the serialized object exists
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            }

            fullName.value = "";
            contactNumber.value = "";
            emailAddress.value = "";
            message.value = "";
          });
    }
    function displayContactList()
    {

      if(localStorage.length > 0)
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++)
        {
          let contactData = localStorage.getItem((index + 1).toString());

          console.log(contactData);

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

    function Start()
    {
        console.log("App Started...");

        // Dynamically update Products nav link to Projects
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-code"></i> Projects';
        
        // Create new nav link item and inject into navbar after about us
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
        navLinkItem.appendChild(navLink);
        
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)


        switch (document.title) 
        {
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
        }
        
    }

    window.addEventListener("load", Start);

})();
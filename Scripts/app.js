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
      function bgFunction()
      {
      //  mainContent.insertAdjacentHTML(mainContent, "<p>This was added by a butto</p>")
        document.body.style.backgroundImage = "url('Assets/finn.png')";

      }
      document.body.style.backgroundColor = "#49A4B0";
      //document.querySelector("body").style.background = "url(../Assets/finn.png)";
      
        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading" class="text-light outline">Welcome to WEBD6201 - Lab 1</h1>
        <button type="button" id="updateBackground" class="btn-lg btn-dark">Update Background Colour!</button>
         <p id="paragraphOne" class="fs-3 fw-bold text-light outline">This is my first Paragraph</p>
        `;

      const backgroundButton = document.querySelector('#updateBackground');

      backgroundButton.addEventListener("click", bgFunction);
        
    }

    function displayAbout()
    {
      // Grab container element
      const container = document.querySelector(".container");
      // Heading
      const heading = document.createElement("h1");
      heading.innerText = "Meet Scott & Nick";
      heading.style.textDecoration = "underline";
      heading.style.textDecorationColor = "green";
      container.appendChild(heading);
      
      // About Scott 
      const aboutScottContainer = document.createElement("div");
      const aboutScottTextContainer = document.createElement("div");
      aboutScottTextContainer.innerHTML = '<h3 class="pb-4">Scott Alton</h3>';
      const aboutScottText = document.createElement("p");
      aboutScottContainer.classList.add("my-5", "border-bottom", "p-4");
      aboutScottTextContainer.classList.add("col-lg-6", "p-4");
      aboutScottText.innerText = "Scott is a full-stack developer based in Whitby, Ontario. I enjoy woring with JavaScript, Ruby on Rails,\
       and C#. Before coming to Durham College and pursuing a change in career direction, I worked as a cook and musician, and also \
       teach guitar and piano lessons. I love creating things from scratching and breaking down complex problems.";
      
      aboutScottTextContainer.appendChild(aboutScottText);
            
      // Button to view Scott resume
      const scottResumeButton = document.createElement("btn");
      scottResumeButton.innerText = "View Resume";
      scottResumeButton.classList.add("btn", "btn-success");
      aboutScottTextContainer.appendChild(scottResumeButton);

      // Scott image
      const aboutScottImage = document.createElement("div");
      aboutScottImage.innerHTML = `<img src="../Assets/scottaltonpic.jpg" class="col-lg-6" />`
      aboutScottImage.classList.add("col-lg-4");
      aboutScottContainer.classList.add("row");
      
      // Inject elements into about container
      aboutScottContainer.appendChild(aboutScottTextContainer);
      aboutScottContainer.appendChild(aboutScottImage);

      // About Nick
      const aboutNickContainer = document.createElement("div");
      const aboutNickTextContainer = document.createElement("div");
      aboutNickTextContainer.innerHTML = "<h3>Nick Sturch-Flint</h3>";
      const aboutNickText = document.createElement("p");
      aboutNickTextContainer.classList.add("col-lg-6", "p-4");
      aboutNickText.innerText = "Nick is a full-stack developer based in Oshawa, Ontario. I enjoy woring with JavaScript, Ruby on Rails,\
       and C#. Before coming to Durham College and pursuing a change in career direction, I worked as a cook and musician, and also \
       teach guitar and piano lessons. I love creating things from scratching and breaking down complex problems.";
      
      aboutNickTextContainer.appendChild(aboutNickText);
      
      
      // Button to view Nick resume
      const nickResumeButton = document.createElement("btn");
      nickResumeButton.innerText = "View Resume";
      nickResumeButton.classList.add("btn", "btn-success");
      aboutNickTextContainer.appendChild(nickResumeButton);

      // Nick image
      const aboutNickImage = document.createElement("div");
      aboutNickImage.innerHTML = `<img src="../Assets/scottaltonpic.jpg" class="col-lg-6" />`
      aboutNickImage.classList.add("col-lg-4");
      aboutNickContainer.classList.add("row");
      
      // Inject elements into about container
      aboutNickContainer.appendChild(aboutNickImage);
      aboutNickContainer.appendChild(aboutNickTextContainer);
      

      container.appendChild(aboutScottContainer);
      container.appendChild(aboutNickContainer);

      // Scott picture
      // Nick picture
      // About Nick
      // Button to view Nick resume
      // Button to view projects and contact
        let newParagraph = document.createElement("p");
        let subheadingText = "About Scott & Nick";

        let paragraphOneElement = document.getElementById("paragraphOne");
  
    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function displayContact()
    {
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
                messageArea.className = "alert alert-danger";
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
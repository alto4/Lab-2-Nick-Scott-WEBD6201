"use strict";
// User Class

((core) => {
  class User {
    // getters and setters
    get FirstName() {
      return this.m_firstName;
    }

    set FirstName(value) {
      this.m_firstName = value;
    }

    get LastName() {
      return this.m_lastName;
    }

    set LastName(value) {
      this.m_lastName = value;
    }

    get Username() {
      return this.m_username;
    }

    set Username(value) {
      this.m_username = value;
    }

    get EmailAddress() {
      return this.m_emailAddress;
    }

    set EmailAddress(value) {
      this.m_emailAddress = value;
    }

    get Password() {
      return this.m_password;
    }

    set Password(value) {
      this.m_password = value;
    }

    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [firstName=""]
     * @param {string} [lastName=""]
     * @param {string} [username=""]
     * @param {string} [emailAddress=""]
     * @param {string} [password=""]
     */
    constructor(
      firstName = "",
      lastName = "",
      username = "",
      emailAddress = "",
      password = ""
    ) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Username = username;
      this.EmailAddress = emailAddress;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the User class
     *
     * @returns {string}
     */
    toString() {
      return `First Name     : ${this.FirstName} \nLast Name     : ${this.LastName} \nUsername : ${this.Username} \nEmail Address : ${this.EmailAddress} `;
    }

    /**
     * This method returns a JSON object made up of the properties of the User class
     *
     * @returns {Object}
     */
    toJSON() {
      return {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Username: this.Username,
        EmailAddress: this.EmailAddress,
      };
    }

    /**
     * This method takes a JSON data object and assigns the values to the User class properties
     *
     * @param {Object} data
     */
    fromJSON(data) {
      this.FirstName = data.FirstName;
      this.LastName = data.LastName;
      this.Username = data.Username;
      this.EmailAddress = data.EmailAddress;
      this.Password = data.Password;
    }

    /**
     * This method converts the User into a comma-separated value string
     *
     * @returns {string}
     */
    serialize() {
      if (
        this.FirstName !== "" &&
        this.LastName !== "" &&
        this.EmailAddress !== "" &&
        this.Username !== ""
      ) {
        return `${this.FirstName},${this.LastName},${this.EmailAddress},${this.Username}`;
      } else {
        console.error("One or more properties of the User is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the User class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data) {
      let propertyArray = data.split(",");
      this.FirstName = propertyArray[0];
      this.LastName = propertyArray[1];
      this.Username = propertyArray[2];
      this.EmailAddress = propertyArray[3];
    }
  }

  core.User = User;
})(core || (core = {}));

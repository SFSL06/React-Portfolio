import React from "react";
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div>
            <div>
              <h2>
                ADDRESS
              </h2>
              <p>
                19 Shaftmoor Lane Solihull <br />
                Birmingham
              </p>
            </div>
            <div>
              <h2>
                EMAIL
              </h2>
              <a>
                sabeenjamil100@yahoo.com
              </a>
              <h2>
                PHONE
              </h2>
              <p>123-456-7890</p>
            </div>
          </div>
        </div>
        <form>
          <h2>
            Hire Me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
          </div>
          <button
            type="submit"
           >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
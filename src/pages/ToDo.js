import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

function ToDo() {
  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <Navbar />

      <div className="container">
        <br></br>
        <h6 className="projectInfo">
          #React.js, React Bootstrap, Firebase: Authentication, Database,
          Storage#
        </h6>
        <li className="min"> 3 min read</li>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-5 col-sm-12">
            <br></br>

            <p>
              Studies have shown that people perform better when they have
              written down what they need to do. Almost everyone struggles with
              getting stuff done. To do list is a time-honoured system that’s
              beautiful in its simplicity: work out what needs to be done and in
              what order, write down the tasks, do them, and then, one-by-one,
              cross them out.
            </p>
          </div>

          <div className="col-md-6 offset-sm-1 col-sm-12">
            <div className="card" data-aos="fade-left" data-aos-once="true">
              <img
                src="/images/dashboard.png"
                width="100%"
                height="300px"
                alt="weatherapp"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="row">
          <div
            className="col-md-5  col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img
              src="/images/addTodo.png"
              width="100%"
              height="300px"
              alt="todoList"
            />
          </div>
          <div className="col-md-4 offset-sm-2 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <p>
              ToDo List allows users add new to do to the list, view and delete
              when accomplished. No one can keep everything in mind, so this app
              is a great help to organize your thoughts and tasks.
            </p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-4 col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img
              src="/images/signup.png"
              width="100%"
              height="300px"
              alt="todoList"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            <p>
              <br></br>
              User can safely login with google or create account and
              personalize it by adding an avatar image. 78% of people forget
              their passwords. Users can simply restore their passwords by
              filling out their email address in password reset form.
            </p>
          </div>
          <div
            className="col-md-5 col-sm-12"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <img
              src="/images/email.png"
              width="100%"
              height="300px"
              alt="todoList"
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <a
        href="https://github.com/Anya555/ReactTodoApp"
        target="_blank"
        rel="noopener noreferrer"
        className="projectInfo"
      >
        #See project on GitHub#
      </a>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
export default ToDo;

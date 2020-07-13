import React from "react";
import WithAside from "../layout/WithAside";

const Contact = () => {
  return (
    <WithAside
      main={
        <section className="panel contact">
          <h1 className="first">Contact Us</h1>
        </section>
      }
      aside={
        <section className="panel opening-hours">
          <h2 className="first">Opening Hours</h2>
          <table className="table opening-hours-table">
            <tr>
              <td>Monday</td>
              <td>17:00 - 23:00</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>17:00 - 23:00</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>17:00 - 23:00</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>17:00 - 23:30</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>17:00 - 23:30</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>17:00 - 23:00</td>
            </tr>
          </table>
          <div className="subtext">
            Christmas closed 25th 26th December. Open new years day.
          </div>
        </section>
      }
    />
  );
};
export default Contact;

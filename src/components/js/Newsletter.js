import React from "react";
import "../css/Newsletter.css";

const Newsletter = () => {
  return (
    <article classname="Newsletter-container">
      <h3>Join our newsletter?</h3>
      <form action="action_page.php" method="post" className="Newsletter">
        <label for="email">Email</label>
        <input
          className="Email-box"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <button>Submit</button>
      </form>
    </article>
  );
};

export default Newsletter;

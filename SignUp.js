import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Footer from "../Footer";

export default function SignUp() {
    return (
      <div>
        <h1 className="sign-up">SIGN UP</h1>
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
      </div>
    );
}

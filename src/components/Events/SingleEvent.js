import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce correct email");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
      <form className="email_registration" onSubmit={onSubmit}>
        <label>Get registred for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Home.css";

function Home() {
  const [value, setValue] = useState();
  return (
    <>
      <PhoneInput
        style={{ marginTop: 200, marginLeft: 500, width: "300px" }}
        defaultCountry="US"
        placeholder="Enter Phone Number"
        value={value}
        onChange={setValue}
      />
      {value ? (
        <div className="phone">
          <h4>Your Phone Number</h4>
          <p>{value}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;

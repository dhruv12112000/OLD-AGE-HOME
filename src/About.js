import React from "react";

let fixed = {
  minHeight: "85vh",
};
let none = {
  listStyle: "none",
  fontSize: "30px",
  marginTop: "10px",
};

let border = {
  border:"none",
  
  backgroundImage: "radial-gradient(circle, #9dfff2, #7affd5, #72fca8, #86f66e, #a8eb12)",
};

export const About = () => {
  return (
    <div style={fixed}>   
      <div style={border}>
        <p className="text-center">
          <h3>OLD AGE HOME </h3> <br />{" "}
          <h6>
            <ol style={none}>
              <li>
              We work round the clock selflessly and tirelessly for less privileged people. 
              </li>
              <li>
              These abandoned senior citizens and homeless mentally disabled people deprived females and homeless people suffering from incredible disease are brought to our NGO’s shelter home by police, Govt. 
              </li>
              <li>
              Hospital, referred by Hon’ble courts and by social welfare departments. By the grace of God all the facilities at our NGO are completely free of charges for less privileged people such as accommodation, food, medical and every day amenities.
              </li>
              <li>
              Age is just a number, the saying goes. Not really! Being compassionate towards our own parents shouldn’t be so difficult, right?
              </li>
              <li>
              Well, but there are is still some dearth of sensitivity towards aged parents in our country.  
              </li>
              <li>
              There are old age homes in the city, that are occupied with the aged that have been abandoned by families and are in need of companions to see them through their finishing years. .
              </li>
              <li>
                {" "}
              </li>
            </ol>
          </h6>
          <br />
          <a href="https://www.linkedin.com/in/dhruv-vashist-501a1211a/"></a>
          <a href="https://github.com/dhruv12112000"></a>
        </p>
      </div>
    </div>
  );
};

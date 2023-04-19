import React from "react";

const Meetings = ({ meeting }) => {
  return (
    <div>
      <h1 className="font-Lato text-[1.4rem] font-bold text-[#666666]">
        {meeting.description}
      </h1>
      <h3 className="font-late text-[1.2rem] text-[#999999]">{meeting.time}</h3>
      <p className="font-late text-[1.2rem] text-[#999999]">
        {meeting.address}
      </p>
    </div>
  );
};

export default Meetings;

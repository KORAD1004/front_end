import React, {useState}from 'react';
import Section01 from '../../components/myTrip/Section01';
import Section02 from '../../components/myTrip/Section02';
import Section03 from '../../components/myTrip/Section03';

const MyTripCreate = () => {
  const [tripName, setTripName] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dayCount, setDayCount] = useState("");

  // State for Section02 (rows)
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [rows, setRows] = useState([
    { id: 1, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
    { id: 2, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
    { id: 3, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" }
  ]);

  const handleSaveSuccess = () => {
    console.log("여행 데이터가 성공적으로 저장되었습니다!");
  };

  return (
    <div>
      <Section01
        tripName={tripName} setTripName={setTripName}
        numPeople={numPeople} setNumPeople={setNumPeople}
        startDate={startDate} setStartDate={setStartDate}
        endDate={endDate} setEndDate={setEndDate}
        dayCount={dayCount} setDayCount={setDayCount}
      />
      <Section02
         rows={rows}
         setRows={setRows}
         location={location}
         setLocation={setLocation}
      />
      <Section03
        tripName={tripName}
        numPeople={numPeople}
        startDate={startDate}
        endDate={endDate}
        dayCount={dayCount}
        rows={rows}
        onSaveSuccess={handleSaveSuccess}
      />
    </div>
  );
};
  
  export default MyTripCreate;
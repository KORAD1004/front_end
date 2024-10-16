import { useState, useEffect } from 'react';
import Section01 from '../../components/myTrip/Section01';
import Section02 from '../../components/myTrip/Section02';
import Section03 from '../../components/myTrip/Section03';
import { useMediaQuery } from 'react-responsive';

const MyTripCreate = () => {
  const [tripName, setTripName] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dayCount, setDayCount] = useState("");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const [rows, setRows] = useState(() => {
    const baseRows = [
      { id: 1, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
      { id: 2, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
      { id: 3, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" },
    ];
  
    if (isDesktop) {
      baseRows.push({ id: 4, place: "", latitude: "", longitude: "", isMemoVisible: false, address: "", memo: "" });
    }
  
    return baseRows;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      />
    </div>
  );
};

export default MyTripCreate;

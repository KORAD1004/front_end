import axios from 'axios';
import Section01 from '../../components/courseView/Section01.jsx';
import Section02 from '../../components/courseView/Section02.jsx';
import Section03 from '../../components/courseView/Section03.jsx';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const CourseView = () => {
  const [param] = useSearchParams();
  const code = param.get("code");
  const [data, setData] = useState([]);

  useEffect(()=>{
      axios.get(`${import.meta.env.VITE_SERVER_URL}/api/schedule/${code}`)
          .then(res=>{
              setData(res.data);
          })
  }, [code]);
  
  return (
    <div>
      <Section01 />
      <Section02 data={data}/>
      <Section03 data={data}/>
    </div>
  );
}

export default CourseView;
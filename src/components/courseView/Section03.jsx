import styles from '../../styles/courseView/section03.module.css';
import PropTypes from 'prop-types';
import InfoBox from '../radWaste/InfoBox';

const Section03 = ({data}) => {
    console.log(data);
    
    return (
        <div className={styles.allContainer}>
            <div className={styles.placeList} 
            style={data.length>0&&data[1].length>3?null:{justifyContent:"center"}}
            >
                {data.length>1&&
                    data[1].map(place=>(
                        <div key={place.number} className={styles.place}>
                            <div className={styles.placeImg}>
                                <div className={styles.number}>{place.number}</div>
                                <img src={"https://"+place.image}/>
                            </div>
                            <InfoBox msg="경주 국립박물관" msg2="경북 경주시 일정로 186" width="100%"/>
                            <div className={styles.memo}>
                                <span>오전 20:00 - 오후 18:00</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <div className={styles.courseImgeAllContainer}>
                {data&&data.length>0&&
                    data[1].map((dto)=>(
                        <div key={dto.number} className={styles.courseImageContainer}>
                            <img 
                                src={"https://"+dto.image}
                                alt="course Imgaes1" 
                                className={styles.courseImage}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={styles.courseContainer}>
                {data&&data.length>0&&
                    data[1].map((dto)=>{
                        <div key={dto.number} className={styles.card}>
                            <div className={styles.museumName}>{dto.title}</div>
                            <hr className={styles.underline} />
                            <div className={styles.museumAddress}>{dto.address}</div>
                        </div>
                    })
                }
            </div>
            <div className={styles.buttonContainer}>
                {data&&data.length>0&&
                    data[1].map((dto)=>(
                        <button key={dto.number} className={styles.customButton}>{}</button>
                    ))
                }
            </div> */}
            <div className={styles.underline2}></div>
            <button className={styles.saveButton}>코스 내보내기</button>
        </div>
    );
};

export default Section03;

Section03.propTypes = {
    data: PropTypes.array
}
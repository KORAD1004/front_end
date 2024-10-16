import styles from '../../styles/radWaste/radWaste.module.css';
import PropTypes from 'prop-types';

export default function InfoBox({msg, msg2, width}) {
    return (
        <div style={{width:width}} className={styles.gongdanInfo}>
            <span>{msg}</span>
            <div className={styles.line}/>
            <span>{msg2}</span>
        </div>
    )
}

InfoBox.propTypes = {
    msg: PropTypes.string,
    msg2: PropTypes.string,
    width: PropTypes.string
}
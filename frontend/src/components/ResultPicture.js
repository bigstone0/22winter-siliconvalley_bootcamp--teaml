import React, { useState } from "react";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";
import styles from "../css/ResultPicture.module.css";

export default function ResultPic({ before, after }) {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className={styles.resultPic}>
      <div
        className={styles.resultPicture__imgBox}
        onMouseOver={() => setIsListHover(true)}
        onMouseOut={() => setIsListHover(false)}
      >
        <img
          // src={change1}
          src={isListHover ? after : before}
          alt="슬랙이미지 변환"
        />
      </div>
    </div>
  );
}

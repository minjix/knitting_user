import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styles from "./../css/calendar.module.css";

function Calendar({ onSelDate }) {
  const [selectedDate] = useState(new Date());

  const formatDateToYMD = (date) => {
    if(!(date instanceof Date)) return null;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2,'0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <DatePicker
      dateFormat="yyyy.MM.dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
      maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={(date) => {
        //setSelectedDate(date);
        onSelDate(formatDateToYMD(date));
      }}
      className={styles.datePicker}
    />
  );
}

export default Calendar;

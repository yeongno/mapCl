import React from "react";
import { Calendar, DatePicker } from "antd";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
dayjs.extend(customParseFormat);
const Calendar1 = (props) => {
  dayjs.extend(customParseFormat);
  dayjs.extend(advancedFormat);
  dayjs.extend(weekday);
  dayjs.extend(localeData);
  dayjs.extend(weekOfYear);
  dayjs.extend(weekYear);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const customFormat = (value) => ` ${value.format(dateFormat)}`;
  const onChange = (date, dateString) => {
    props.setPickDate(dateString);
    console.log(dateString);
  };
  const onRange = (date, dateString) => {
    props.setPickRange(dateString);
    console.log(dateString);
  };
  return (
    <div className="site-calendar-demo-card">
      <div className="calendal-wrapper">
        <div className="range-wrapper">
          <RangePicker onChange={onRange} format={dateFormat} />
        </div>
        <div className="date-wrapper">
          <DatePicker onChange={onChange} format={customFormat} />
        </div>
      </div>
    </div>
  );
};
export default Calendar1;

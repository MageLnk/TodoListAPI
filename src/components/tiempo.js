import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Tiempo() {
  return (
    <div>
      <p>Eliga fecha de vencimiento:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}
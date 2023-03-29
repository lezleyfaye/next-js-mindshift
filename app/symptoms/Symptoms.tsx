'use client';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { RegisterResponseBodyPost } from '../api/symptoms/route';
import styles from './symptoms.module.scss';

type RangeSliderProps = {
  value: number;
  onSliderChange: (value: number) => void;
};

function RangeSlider(props: RangeSliderProps) {
  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onSliderChange(parseInt(event.target.value));
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={props.value}
        className="range range-primary"
        step="25"
        onChange={handleSliderChange}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>😟</span>
        <span className={styles.bar}>|</span>
        <span>😐</span>
        <span className={styles.bar}>|</span>
        <span>😀</span>
      </div>
    </div>
  );
}

export default function SymptomsPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [overallMood, setOverallMood] = useState(50);
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleSave(event: React.MouseEvent<HTMLButtonElement>) {
    // to do create fetch request to api route that creates rating,
    console.log('Selected date:', selectedDate);
    console.log('Overall mood:', overallMood);
  }

  return (
    <div>
      <h1 className={styles.header}>How are you feeling today?</h1>
      <div className={styles.container}>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            const response = await fetch('/api/symptoms', {
              method: 'POST',
              body: JSON.stringify({
                date: selectedDate.toISOString(),
                overall: overallMood,
              }),
            });

            const data: RegisterResponseBodyPost = await response.json();

            if ('errors' in data) {
              setErrors(data.errors);
              return;
            }
          }}
        >
          <div className={styles.calendar}>
            Date:
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <button onClick={handleSave} type="submit">
            Save
          </button>
          <div>
            <div className={styles.section}>
              <h2 className={styles.title}>Overall Mood Today</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider
                  value={overallMood}
                  onSliderChange={setOverallMood}
                />
              </div>
            </div>

            {/*





          */}
            <div className={styles.section}>
              <h2 className={styles.title}>Feelings of Sadness</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.title}>Anger or Irritability</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.title}>Focus and Concentration</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.title}>Appetite</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.title}>Somatic Symptoms</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.title}>Fatigue</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.title}>Sleep Quality</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

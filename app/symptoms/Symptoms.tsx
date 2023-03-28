'use client';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './symptoms.module.scss';

function RangeSlider() {
  const [value, setValue] = useState<number>(50);

  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="range range-primary"
        step="25"
        onChange={handleSliderChange}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
}

export default function SymptomsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
  }

  return (
    <>
      <h1 className={styles.header}>How are you feeling today?</h1>
      <label>
        Date:
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          showIcon
        />
      </label>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Overall Mood Today</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Feelings of Sadness</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Anger or Irritability</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Fatigue</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Focus and Concentration</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Appetite</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Somatic Symptoms</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Sleep Quality</h2>
          <div className={styles.sliderContainer}>
            <span>Low 😟</span>
            <RangeSlider />
            <span>High 😀</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Did you take your medication today?</h2>
        <label>
          Yes
          <input type="radio" name="meds" value="yes" />
        </label>
        <label>
          No
          <input type="radio" name="meds" value="no" />
        </label>
      </div>
    </>
  );
}

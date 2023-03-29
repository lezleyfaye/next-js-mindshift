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
        value={value}
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
  }

  return (
    <div>
      <h1 className={styles.header}>How are you feeling today?</h1>
      <div className={styles.container}>
        <form>
          <div className={styles.calendar}>
            Date:
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <div className={styles.section}>
              <h2 className={styles.title}>Overall Mood Today</h2>
              <div className={styles.sliderContainer}>
                <RangeSlider />
              </div>
            </div>
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
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
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
  return (
    <>
      <h1>How are you feeling today?</h1>
      <div>
        <h2>Overall Mood Today</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Feelings of Sadness</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Anger or Irritability</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Fatigue</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Focus and Concentration</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Appetite</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Somatic Symptoms</h2>
        <RangeSlider />
      </div>
      <div>
        <h2>Sleep Quality</h2>
        <RangeSlider />
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

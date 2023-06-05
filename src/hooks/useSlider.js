import { useState } from "react";

export const useSlider = (min, max, defaultState, label, id,setValue) => {
    const [slide, setSlide] = useState(defaultState);
    let val ;
    const handleChange = e => {
        setValue(e.target.value);
      console.log('setting level', e.target.value)
      setSlide(e.target.value);
    };
  
    const Slider = () => (
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={500}
        // value={state} // don't set value from state
        defaultValue={slide} // but instead pass state value as default value
        // onChange={e => console.log(e.target.value,"helllo geting")} // don't set state on all change as react will re-render
        onChange={handleChange} // only set state when handle is released
      />
    );
    return [slide, Slider,val, setSlide];
  };
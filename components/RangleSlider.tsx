"use client"
import { Slider } from 'antd'
import React, { useState } from 'react'

interface RangeType {
  setRangeValue:(value:number[]) => void
}


export const RangleSlider:React.FC<RangeType> = ({setRangeValue}) => {
      const [values, setValues] = useState<number[]>([39, 500])
      const onChangeComplete = (value:number[]) => {
        setValues(value)
        setRangeValue(value)
      };
  return (
    <div>
        <Slider
        range
        step={1}
        min={1}
        max={1400 }
        defaultValue={values}
        onChangeComplete={onChangeComplete}
        />

        <div>
        <p>
            <span className='text-[15px] leading-4 mr-1'>Price:</span>
            <span className='font-semibold text-[#46A358]'>
                {Array.isArray(values)? values[0] : values}$ - 
            </span>
            <span className='font-semibold text-[#46A358]'>
                {Array.isArray(values)? values[values.length - 1] : values}$
            </span>

        </p>
        </div>
    </div>
  )
}

export default RangleSlider
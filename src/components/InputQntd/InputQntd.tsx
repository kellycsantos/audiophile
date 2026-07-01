'use client'

import styles from './inputqntd.module.scss'

type InputQtdProps = {
  value: number
  onChange?: (value: number) => void
}

const InputQtd = ({ value, onChange }: InputQtdProps) => {

  const changeValue = (option: 'increase' | 'decrease') => {
    if(option === 'increase' && value < 100){
      onChange?.(value + 1)
    }
    if(option === 'decrease' && value > 1){
      onChange?.(value - 1)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => changeValue('decrease')}>-</button>
      <input type='text' value={value} readOnly />
      <button onClick={() => changeValue('increase')}>+</button>
    </div>
  )
}

export default InputQtd
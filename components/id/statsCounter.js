import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/id/statsCounter.module.css'

function StatsCounter({ start, end, info }) {
  const [count, setCount] = useState(null)
  const ref = useRef(start)
  const accumulator = end / 100

  const updateCount = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator)
      if (result > end) {
        return setCount(end)
      }
      setCount(result)
      ref.current = result
    }
    setTimeout(updateCount, 30)
  }

  useEffect(() => {
    let isMount = true
    if (isMount) {
      updateCount()
    }
    // return () => (isMount = true);
  }, [end, start])

  return (
    <div className={styles.xyz}>
      <div className={styles.count}>{count}+</div>
      <div>{info}</div>
    </div>
  )
}

export default StatsCounter

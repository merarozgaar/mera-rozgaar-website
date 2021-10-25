// @flow
import React, { useCallback, useEffect, useRef, useState } from 'react';

type PropTypes = {
  duration?: number,
  start: number,
  end: number,
  step?: number,
  decimals?: number,
};

const Counter = ({
  duration = 1.5,
  start,
  end,
  step = 1,
  decimals = 0,
}: PropTypes): React$Node => {
  const ref: any = useRef();

  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState(start || 0);

  const [completed, setCompleted] = useState(false);

  const createObserver = useCallback(
    () =>
      new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }),
    [],
  );

  const formatNumber = useCallback(
    (n) => Number(n).toFixed(decimals),
    [decimals],
  );

  const shouldStop = useCallback(
    () => formatNumber(value) === formatNumber(end),
    [formatNumber, value, end],
  );

  const increment = useCallback(() => {
    setValue((state) => (shouldStop() ? state : state + step));
  }, [shouldStop, step]);

  useEffect(() => {
    const observer = createObserver();

    const node = ref.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [ref, createObserver]);

  useEffect(() => {
    const timeout = (duration * 1000) / end;

    let interval;

    if (visible && !completed) {
      interval = setInterval(increment, timeout);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [visible, completed, duration, end, increment]);

  useEffect(() => {
    setCompleted(shouldStop());
  }, [shouldStop]);

  return (
    <span ref={ref}>{visible ? formatNumber(value) : formatNumber(start)}</span>
  );
};

export default Counter;

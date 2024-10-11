type ThrottledFunction<T extends any[]> = (...args: T) => void;

export function searchThrottle<T extends any[]>(
    func: ThrottledFunction<T>,
    callCount: number,
    setCallCount: (newCount: (prev: number) => number) => void,
    lastReset: number,
    setLastReset: (newResetTime: number) => void,
    limitInMs: number = 60000
): ThrottledFunction<T | string> {
  return (...args: T) => {
    const now = Date.now();

    if (now - lastReset >= limitInMs) {
      setCallCount(0);
      setLastReset(now);
    }

    if (callCount < 5) {
      func(...args);
      setCallCount((prevCount) => prevCount + 1);
    }
  };
}

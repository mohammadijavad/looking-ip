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

    // Reset the counter if the limit time has passed
    if (now - lastReset >= limitInMs) {
      setCallCount(0);
      setLastReset(now);
    }

    // Check the current call count and decide whether to execute the function
    if (callCount < 5) {
      func(...args); // Execute the function
      setCallCount((prevCount) => prevCount + 1); // Update the call count
    }
  };
}

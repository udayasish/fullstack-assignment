export const debounce = (func: Function, delay: number) => {
    let timeoutId: number;
    return (...args: string[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
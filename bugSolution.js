```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage of `setInterval` with cleanup
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```
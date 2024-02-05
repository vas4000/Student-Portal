// Function to report web vitals performance metrics
// It takes a callback function 'onPerfEntry' as a parameter
const reportWebVitals = onPerfEntry => {
    // Checking if 'onPerfEntry' is a function and not undefined
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // Dynamically importing web-vitals library to get performance metrics
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;


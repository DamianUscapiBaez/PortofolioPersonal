const ProgressBar = ({ value, maxValue }) => {
    const progress = (value / maxValue) * 100;
    return (
        <div className="progress-bar" style={{ marginTop: "5px"}}>
            <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    fontSize: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
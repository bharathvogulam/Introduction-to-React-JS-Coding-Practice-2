const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={className}>
      <p class="box-title">{text}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  <div class="bg-container">
    <h1>Boxes</h1>
    <div class="box-container">
      <Box text="Small" className="box small-box" />
      <Box text="Medium" className="box medium-box" />
      <Box text="Large" className="box large-box" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));

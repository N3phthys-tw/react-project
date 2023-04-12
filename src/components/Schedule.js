import "./Schedule.css";
import footer from "../images/footer.jpg";

const Schedule = () => {
  const bands = [
    { id: 1, time: "16:00-17:00", title: "1976" },
    { id: 2, time: "16:30-17:30", title: "Trash" },
    { id: 3, time: "18:00-19:00", title: "Enno Cheng 鄭怡農" },
    {
      id: 4,
      time: "18:30-19:30",
      title: "Fresh Juicer 血肉果汁機",
    },
    { id: 5, time: "19:00-20:00", title: "Collage 珂拉琪" },
    { id: 6, time: "19:30-20:30", title: "KST 康士坦的變化球" },
  ];

  const renderPerformance = bands.map((band) => {
    return (
      <div key={band.id} className="performance">
        <span className="timeline">
          <span className="timeline-dot"></span>
          <span className="timeline-bar"></span>
        </span>
        <span>
          <span className="performanceTime">{band.time}</span>
          <span className="performanceName">{band.title}</span>
        </span>
      </div>
    );
  });

  return (
    <div>
      <div className="schedule">
        <div className="schedule-container">
          <div className="stage">
            <span className="type">main stage</span>
            <span className="timeline">
              <span className="timeline-bar"></span>
            </span>
            <span className="type">other stage</span>
          </div>
          {renderPerformance}
        </div>
      </div>
      <div>
        <img style={{ width: "100%" }} src={footer} alt=""></img>
      </div>
    </div>
  );
};

export default Schedule;

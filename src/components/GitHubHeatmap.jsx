import GitHubCalendar from "react-github-calendar";

const GitHubHeatmap = () => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <GitHubCalendar
        username="om6064"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
};

export default GitHubHeatmap;

import GitHubCalendar from "react-github-calendar";

const GitHubHeatmap = () => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <GitHubCalendar
        username="om6064"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        color="##5e417a" // still required
        // Use a custom `theme`
        theme={{
          light: ["#ebebeb", "#5d417a", "#79549d","#9668c0","#b27be4"],
          dark: ["#ebebeb", "#5d417a", "#79549d","#9668c0","#b27be4"],
        }}
      />

    </div>
  );
};

export default GitHubHeatmap;

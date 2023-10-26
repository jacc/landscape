import { IconRun, IconStairs, IconWeight } from "@tabler/icons-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const data = [
  { name: "Weightlifting", uv: 10, strain: 12.5, icon: <IconWeight /> },
  { name: "Running", uv: 5, strain: 13.4, icon: <IconRun /> },
  { name: "Stairmaster", uv: 3, strain: 10.1, icon: <IconStairs /> },
];

const CustomizedAxisTick = ({ x, y, payload, icon }) => {
  return <g transform={`translate(${x - 11.5},${y})`}>{icon}</g>;
};

const ActivityCard = () => {
  return (
    <ResponsiveContainer aspect={2}>
      <BarChart data={data} barCategoryGap={5}>
        <CartesianGrid opacity={0.1} />

        <XAxis
          dataKey="name"
          interval={0}
          tick={(props) => (
            <CustomizedAxisTick
              {...props}
              icon={data.find((item) => item.name === props.payload.value).icon}
            />
          )}
        />

        <Bar
          dataKey="uv"
          shape={({ x, y, width, height }) => (
            <path
              className="fill-blue-10"
              d={`M${x} ${y + height}V${2 + y}q0-2 2-2h${width - 4}q2 0 2 2v${
                height - 2
              }z`}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityCard;

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const Piechart = () => {
    const data = [
        {
          name: "Facebook",
          value: 205000,
        },
        {
          name: "Instagram",
          value: 23400,
        },
        {
          name: "LinkedIn",
          value: 29078,
        },
        {
          name: "YouTube",
          value: 18900,
        },
      ];
      const colors = [
        "#053365",
        "#249FFF",
        "#000000",
        "#3DED97",
      ];
  return (
    <div className="w-1/4 p-5 h-[350px] ">
        <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Piechart
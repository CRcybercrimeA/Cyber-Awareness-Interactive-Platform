import StatsCard from "./StatsCard";

const Dashboard = () => {
  const stats = [
    {
      value: "92",
      label: "Security Score",
      sub: "+8% from last week",
      color: "text-green-400",
    },
    {
      value: "147",
      label: "Threats Blocked",
      sub: "Last 30 days",
      color: "text-cyan-400",
    },
    {
      value: "68%",
      label: "Course Completion",
      sub: "Learning progress",
      color: "text-blue-400",
    },
    {
      value: "3",
      label: "Active Alerts",
      sub: "Needs attention",
      color: "text-red-400",
    },
  ];

  const activity = [40, 70, 30, 90, 60, 100, 80, 95, 65, 85];

  return (
    <section
      id="dashboard"
      className="py-20 px-6 bg-[#020617] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Analytics Dashboard
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Track your cybersecurity performance and threat detection stats.
        </p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <StatsCard key={index} {...item} />
          ))}
        </div>

        {/* Activity Chart */}
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl text-left shadow-lg">

          <h3 className="text-lg font-semibold mb-6">
            Security Activity
          </h3>

          <div className="flex items-end gap-4 h-40">
            {activity.map((val, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ height: `${val}%` }}
              ></div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
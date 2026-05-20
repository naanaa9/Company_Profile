import { CheckCircle2, Users, UserCheck, Calendar } from "lucide-react";

const stats = [
  { icon: CheckCircle2, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: UserCheck, label: "Team Members", value: "50+" },
  { icon: Calendar, label: "Years of Experience", value: "9+" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-3">
                <Icon className="w-7 h-7 opacity-70" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
              <p className="text-primary-foreground/70 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

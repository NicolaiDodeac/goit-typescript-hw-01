enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// enum DayOfWeek {
//   Monday = 1,
//   Tuesday = 2,
//   Wednesday = 3,
//   Thursday = 4,
//   Friday = 5,
//   Saturday = 0,
//   Sunday = 0,
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   return day === 0;
// };

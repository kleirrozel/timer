// Edge Cases:
// 1. No beep if no numbers are provided
// 2. Ignore/skip negative numbers and non numbers
const args = process.argv.slice(2);

for (const time of args) {
  if (Number(time) && !isNaN(Number(time)) > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, Number(time) * 1000);
  } else if (Number(time) == null) {
    return null;
  }
};
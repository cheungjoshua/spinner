const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let timer = 0;
for (const x of spinner) {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(`\r${x}   `);
  }, timer);
}

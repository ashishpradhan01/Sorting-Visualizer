export default async function sleep(milliseconds) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, milliseconds)
  );
}

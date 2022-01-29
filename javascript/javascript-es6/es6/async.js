async function parallel() {
  // Start a 500ms timer asynchronously…
  const wait1 = promise1(50);
  // …meaning this timer happens in parallel.
  const wait2 = promise2(50);

  // Wait 50ms for the first timer…
  await wait1;

  // …by which time this timer has already finished.
  await wait2;

  return 'done!';
}

console.log(parallel());

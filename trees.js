let ans = '', i, j
let n = 8

for (i = 0; i <= n; i++) {
  for (let j = i; j < n; j++) {
    ans += ' '
  }
  for (j = 1; j <= (2*i-1); j++) {
    ans += '*'
  }
  ans += '\n'
}
console.log(ans)
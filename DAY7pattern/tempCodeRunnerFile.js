let n = 5;

 for (let i = 0; i < n; i++) {
    let ch =String.fromCharCode(65+i);
   console.log((ch + " ").repeat(i+1));
}
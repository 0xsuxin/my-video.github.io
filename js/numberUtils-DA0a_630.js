const t=(t,r=2)=>String(t).padStart(r,"0"),r=(t,r)=>{const n=((t,r)=>{const n=t/r*100;return Math.min(100,Math.round(n))})(t,r),a=(t=>Math.round(t/100*269))(n);return a/102.4+"rem"},n=t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");export{r as g,n,t as p};

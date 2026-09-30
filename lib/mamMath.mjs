export const money=n=>Math.round((Number(n)+Number.EPSILON)*100)/100;
export function percentage(equities,pct){return equities.map(x=>money(x*pct/100))}
export function proportional(equities,total){const s=equities.reduce((a,b)=>a+b,0);let out=equities.map(x=>money(total*x/s)),d=money(total-out.reduce((a,b)=>a+b,0));if(d)out[out.length-1]=money(out[out.length-1]+d);return out}
export function eligible(members,opened){return members.filter(x=>new Date(x.joined_at)<=new Date(opened)&&(!x.left_at||new Date(x.left_at)>new Date(opened)))}
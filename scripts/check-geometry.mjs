import {readFileSync,writeFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const script=html.match(/<script type="module">([\s\S]*?)<\/script>/)[1];
writeFileSync('/private/tmp/puck-module-check.mjs',script);
const geometry=script.slice(script.indexOf('function rectPath'),script.indexOf('function addSash'));
const context=vm.createContext({});
vm.runInContext(geometry+';globalThis.makeOpenings=openingsForWall;',context);
for(const [name,length,bays,levels,profile] of [
 ['Lafayette low',11.91,4,6,{}],['Lafayette tall',14.91,6,8,{entranceBay:5}],
 ['Mulberry low',11.97,6,6,{}],['Mulberry tall',13.92,5,8,{}],
 ['Houston',5.9,3,6,{}],['Jersey',9.87,11,8,{jersey:true}]
]){
 const openings=context.makeOpenings(length,bays,levels,profile);
 for(const o of openings){
  assert(o.cx-o.w/2>.12 && o.cx+o.w/2<length-.12,name+' bounds');
  assert(o.y+o.h<(levels===6?10.6:14.2)-.1,name+' height');
  if(o.kind==='arch')assert(o.h>=o.w/2,name+' valid arch');
 }
 for(let i=0;i<openings.length;i++)for(let j=i+1;j<openings.length;j++){
  const a=openings[i],b=openings[j];
  const overlap=Math.abs(a.cx-b.cx)<(a.w+b.w)/2-1e-7 && a.y<b.y+b.h-1e-7 && b.y<a.y+a.h-1e-7;
  assert(!overlap,name+' overlapping apertures');
 }
 if(!profile.jersey){
  assert.equal(openings.length,bays*(levels===6?14:20),name+' count');
  assert.equal(openings.filter(o=>o.portal).length,profile.entranceBay===undefined?0:1);
 }
 console.log(name+': '+openings.length+' disjoint apertures, bounds valid');
}
assert(script.includes('ext.scale.z=-1;frame.scale.z=-1;'),'display orientation');
assert(script.includes('geo.rotateX(Math.PI/2);'),'roof maps plan Y to world Z without reflection');
console.log('Geometry checks passed; module saved for node --check.');

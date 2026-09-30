import test from'node:test';import assert from'node:assert/strict';import{percentage,proportional,eligible}from'./mamMath.mjs';
test('+5%',()=>assert.deepEqual(percentage([1000,3000,6000],5),[50,150,300]));
test('-2%',()=>assert.deepEqual(percentage([1000,3000,6000],-2),[-20,-60,-120]));
test('master proportional',()=>assert.deepEqual(proportional([1000,3000,6000],500),[50,150,300]));
test('negative proportional',()=>assert.deepEqual(proportional([1000,3000,6000],-200),[-20,-60,-120]));
test('deterministic rounding',()=>assert.equal(proportional([1,1,1],1).reduce((a,b)=>a+b,0),1));
test('late join excluded',()=>assert.equal(eligible([{joined_at:'2026-09-30T10:00:00Z'},{joined_at:'2026-09-30T12:00:00Z'}],'2026-09-30T11:00:00Z').length,1));
test('left after open included',()=>assert.equal(eligible([{joined_at:'2026-09-30T09:00:00Z',left_at:'2026-09-30T12:00:00Z'}],'2026-09-30T11:00:00Z').length,1));
const child_process = require('child_process');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const willRun = process.argv.includes('run');
const willCompile = process.argv.includes('compile') || process.argv.includes('build');

const clientEnd = path.resolve(__dirname, 'client');
const backend = path.resolve(__dirname, 'backend');
>>>>>>>>>>>>>>>>>>>>
if(!willRun && !willCompile) throw new Error('Must specify run or compile as argument');
if(willRun && !willCompile){
  let child = child_process.exec(`npm run start`,{cwd:backend},(err)=>{
    if(err) console.log(err);
  });
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

    const child2 = child_process.exec(`npm run build`,{cwd:backend},(err2, out2)=>{
      if(err2) console.log(err2);
      console.log(out2);
      console.log('reloading echosystem');
      const child3 = child_process.exec(`pm2 reload ecosystem.config.js`, (err3)=>{
        if(err3) console.log(err3);
        console.log(out);
        child3.stdout.pipe(process.stdout);
        child3.stderr.pipe(process.stderr);
      });
      child2.stdout.pipe(process.stdout);
      child2.stderr.pipe(process.stderr);
    });
  });
  child1.stdout.pipe(process.stdout);
  child1.stderr.pipe(process.stderr);
} else{
  console.log('COMPILE ONLY');
  console.log('Compiling front-end!');
  let child1 = child_process.exec(`npm run build`,{cwd:clientEnd},(err)=>{
    if(err) console.log(err);
    console.log('Compiling backend!');
    const chil2 = child_process.exec(`npm run build`,{cwd:backend},(err2)=>{
      if(err2) console.log(err2);
      chil2.stdout.pipe(process.stdout);
      chil2.stderr.pipe(process.stderr);
    });
  });
  child1.stdout.pipe(process.stdout);
  child1.stderr.pipe(process.stderr);
}

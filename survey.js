const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.question('What is the activity you like doing? ', (answer) => {
    console.log(`You like: ${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`You listen: ${answer}`);
      rl.question('Which meal is your favourite? ', (answer) => {
        console.log(`You like the meal: ${answer}`);
        rl.question('Which sport is your absolute favourite? ', (answer) => {
          console.log(`You like the sport: ${answer}`);
          rl.close();
        });
        
      });
      
    });

  });
  
});
const franc=require('franc')
const langs=require('langs')
const colors=require('colors')

const input=process.argv.slice(2);

if(!input.length){
    console.log('Please provide some input to identify the language')
    process.exit(1);
}


const langCode=franc(input[0]);


if(langCode=='und'){
    console.log("Sorry, couldn't figure it out")
}else{
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}

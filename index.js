// importing packages
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


// using inquirer package module.
inquirer

    // taking input from user.
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])

// creating qr for input user.
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));


    // writing user input into a file.
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

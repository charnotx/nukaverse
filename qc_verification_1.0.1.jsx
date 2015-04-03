#target photoshop
//Created for use by UT Libraries Preservation and Digitization Services
//Created by Austin M. Hixson(austin@austin.utexas.edu) 2015-april-2
//
//Version 1.0.0 austin@austin.utexas.edu 2015-april-2
//Version 1.0.2 austin@austin.utexas.edu 2015-april-3
//
//CHANGED(1.0.0): PREVIOUS->creates a confirmation prompt, which is used in the Script Events Manager. Only saves when OK button is clicked. austin@austin.utexas.edu 2015-april-2
//MODIFIED(1.0.1):New->Changed message to be based on a condition of the resolution being 400. If the resolution is the department standard of 400DPI, then the prompt will provide the resolution,  and height,and width in pixels and inches. If the resolution is not 400DPI, the prompt will tell the user what their current resolution is, and tell them they need to correct this image. austin@austin.utexas.edu 2015-april-2
//MODIFIED(1.0.2):New--> Shortened the message when resolution is not 300DPI. I have commented out the message for when the resolution is correct, so that the user is only prompted when the resolution is not 400DPI. I've left the code so that it can be used if ever needed.
//
//Future Version Goals:
//Prevent image from saving in future version. 
//Look into adding .txt file save on desktop for past resolutions. 
//This will allow the values of the previous image and the current image to be compared. 
//After 'global' variable is working, change the information display format to be in two tables for easy comparison of the values.

// Set units to PIXELS
preferences.rulerUnits = Units.PIXELS;
preferences.typeUnits = TypeUnits.PIXELS;

//assigning values to variables for quality assurance check
var resolution = activeDocument.resolution;
var heightPX = activeDocument.height;
var widthPX = activeDocument.width;

// Set units to INCHES
preferences.rulerUnits = Units.INCHES;

//assigning values to variables for quality assurance check
var heightIN = activeDocument.height;
var widthIN = activeDocument.width;

//assign verification message
var verMessage = "Good Job!"+"\nYour current resolution is: "+resolution+"DPI"+"\nYour current height is:  "+heightIN+" ; "+heightPX+"\nYour current width is:  "+widthIN+" ; "+widthPX+"\n";

//check return based on resolution

//Script to verify resolution of image being saved. START
if (resolution == 400) {
//I have commented out the message for when the resolution is correct, so that the user is only prompted when the resolution is not 400DPI. I've left the code so that it can be used if ever needed.
//   alert(verMessage);
        } 
    else {
("Your current resolution is: "+resolution+"DPI"+"\n"+"\nMake sure to correct this image!");
    };
//Script to verify resolution of image being saved. END
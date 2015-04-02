#target photoshop
//Created for use by UT Libraries Preservation and Digitization Services
//Created by Austin M. Hixson 2nd April 2015
// email: austin@austin.utexas.edu
//
//This script is used in the image editing phase. The script is loaded into the Script Events Manager to run when the save function is run. The script displays the resolution and dimension in pixels of the image being save, and asked the user if the values are accurate. If accurate, the user clicks OK, and moves onto the next image. If not correct, the image remains open for the user to correct.


// Save the current unit preferences (optional)
var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits

// Set units to PIXELS
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS

//assigning values to variables for quality assurance check
var resolution = activeDocument.resolution;
var height = activeDocument.height;
var width = activeDocument.width;


//creates a confirmation prompt, which is used in the Script Events Manager
confirm("Your current resolution is: " + resolution + "DPI" + "\nYour current height is:  "+ height + "\nYour current width is:  "+ width + "\n" + "\nAre you're resolution and dimensions correct?");

// Reset to previous unit prefs (optional)
app.preferences.rulerUnits = startRulerUnits;
app.preferences.typeUnits = startTypeUnits;

    


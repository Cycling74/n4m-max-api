const { homepage } = require("./package.json");

throw new Error(
`It appears that you installed the 'max-api' package from npm. This leads to undesired behaviour and errors.

Please remove the package using 'npm uninstall max-api'.

For more info please visit ${homepage}
`);

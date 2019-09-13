const CSVText = `
Name,birthday
Dave,10
James,28`

const CSVLines = CSVText.split('\n');
const ParsedCSV = CSVLines.map(line => line.split(','));

const JSONText = JSON.stringify(ParsedCSV);
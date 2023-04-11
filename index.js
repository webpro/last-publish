export default async function getLastPublishDate(packageName) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${packageName}`);
    const packageData = await response.json();
    const latestVersion = packageData['dist-tags'].latest;
    const lastPublishDateTime = packageData.time[latestVersion];
    const lastPublishDate = new Date(lastPublishDateTime).toLocaleDateString();
    console.log(`The last publish date of ${packageName} is ${lastPublishDate}`);
  } catch (error) {
    console.error(`Error fetching package data: ${error.message}`);
  }
}

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, fileFormat, artist, tags) {
    const NFT1={
        name : name,
        description : description,
        fileFormat : fileFormat,
        artist : artist,
        tags : tags 
    }
    NFTs.push(NFT1);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let nftsize = NFTs.length;
    for(let k=0; k<nftsize; k++)
        {
            const nft = NFTs[k];
            console.log("\nName:\t\t "+nft.name);
            console.log("Description: "+nft.description);
            console.log("File Format: "+nft.fileFormat);
            console.log("Artist:\t\t "+nft.artist);
            console.log("Tags:\t\t "+nft.tags);
            console.log("---------- Minted "+(k+1)+" ----------");
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    let nftSize = NFTs.length;
    console.log("Total No. Of Minted NFTs: "+nftSize);
}

// call your functions below this line
mintNFT("Good Eve","Beautiful Evening with huge SkyScrappers", "JPEG", "Kushagra Kumar", "DigitalPhoto, Evening");
mintNFT("Delicious Salad","Mouth Watering Salad", "PNG", "Navoday Tonk", "BreakFast, Food");
mintNFT("Moto Helmet","Bike Helmet used for moto vlogging", "JPEG", "Mitashu Tonk", "Racing, Bike");
mintNFT("Farak Hoodies","Hand Woven Hoodies", "GIF", "Rohit Majumdar", "Styling, Fashion");

listNFTs();
console.log("\n");
getTotalSupply();



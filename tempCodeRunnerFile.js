unction changeHieghToMeter(hieghtInputInInches, hieghtInputInFeet) {
    hieghtInputInInches = hieghtInputInInches + (hieghtInputInFeet * 12);
    let meters = hieghtInputInInches * 0.0254;
    return meters;
}
 let height = changeHieghToMeter(5, 4);
 console.log(height);
import Pipeline411 from "./pipeline411";


const BRAND: any = "pipeline"; // can be from env

let BrandConfig: any;

switch (BRAND) {
    case "pipeline":
        BrandConfig = Pipeline411;
        break;
}

export const colors = BrandConfig?.colors;
export const images = BrandConfig.images;
export const label = BrandConfig.labels;

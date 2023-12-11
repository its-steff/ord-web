import { useSanityClient } from "astro-sanity";
import { createImageBuilder } from "astro-sanity";
import { groq } from "astro-sanity";

export async function getHomePageData() {
  const query = groq`*[_type == "pages" && title == "Home"]{
    'hero': {
      'text': hero.heroText,
      'image': {
        'src': hero.image.image.asset->url,
        'altText': hero.image.image.alt,
      },
      'buttonText': hero.buttonText,
    }
  }`;
  const page = await useSanityClient().fetch(query);
  return page[0];
}

export async function getAssetData(assetTitle) {
  const query = groq`*[_type == "assets" && title == "${assetTitle}"]{
    'asset': {
      'src': image.image.asset->url,
      'alt': image.image.alt,
    },
  }`;
  const asset = await useSanityClient().fetch(query);
  console.log("inside the getAsset function", asset);
  return asset[0];
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

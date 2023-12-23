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
      'src': image.asset->url,
      'alt': image.alt,
    },
  }`;
  const asset = await useSanityClient().fetch(query);
  return asset[0];
}

export async function getEventData() {
  const query = groq`*[_type == "events"]{
      'image': {
        'src': image.asset->url,
        'alt': image.alt,
      },
      'title': title,
      'time': time,
      'date': date,
      'location': location,
      'link': link,
  }`;

  const events = await useSanityClient().fetch(query);
  return events;
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

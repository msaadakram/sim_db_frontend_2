import { Metadata } from 'next';
import { getCityBySlug, getCarrierBySlug, PakistanCity } from '@/lib/pakistan-cities';
import { generateMeta, generateStructuredData, generateBreadcrumbSchema } from '@/lib/generate-meta';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.simownerdetail.app';

export function generateCityPageMeta(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  if (!city) {
    return generateMeta({
      title: 'City Not Found | SIM Owner Details Pakistan',
      description: 'The requested city page was not found. Check SIM owner details for major Pakistan cities.',
      path: `/pk/check/${citySlug}`,
      noindex: true,
    });
  }

  const cityKeywords = city.keywords;
  const title = `SIM Owner Details ${city.name} | Phone Number Check, Mobile Number Details & SIM Verification`;
  const description = `Check SIM owner details in ${city.name}, Pakistan. Find phone number details with name, mobile number details with owner name and address, SIM number check, SIM details by number, and live tracker SIM data for ${city.name}. Official methods for Jazz, Zong, Telenor, Ufone verification in ${city.name}.`;

  return generateMeta({
    title,
    description,
    path: `/pk/check/${citySlug}`,
    surface: 'search',
    type: 'website',
    keywords: cityKeywords,
    images: [`/cities/${citySlug}-og.webp`],
  });
}

export function generateCityCarrierPageMeta(citySlug: string, carrierSlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  const carrier = getCarrierBySlug(carrierSlug);

  if (!city || !carrier) {
    return generateMeta({
      title: 'Page Not Found | SIM Owner Details Pakistan',
      description: 'The requested page was not found.',
      path: `/pk/check/${citySlug}/${carrierSlug}`,
      noindex: true,
    });
  }

  const carrierName = carrier.name;
  const cityName = city.name;

  const keywords = [
    `${carrierName.toLowerCase()} sim owner details ${cityName.toLowerCase()}`,
    `${carrierName.toLowerCase()} sim number check ${cityName.toLowerCase()}`,
    `${carrierName.toLowerCase()} sim owner name ${cityName.toLowerCase()}`,
    `${carrierName.toLowerCase()} sim verification ${cityName.toLowerCase()}`,
    `${cityName.toLowerCase()} ${carrierName.toLowerCase()} sim details`,
    `${cityName.toLowerCase()} ${carrierName.toLowerCase()} number check`,
    ...carrier.keywords.filter(k => k.includes(cityName.toLowerCase()) || k.includes(citySlug)),
    ...city.keywords.filter(k => k.includes(carrierName.toLowerCase()) || k.includes(carrier.shortName.toLowerCase())),
  ];

  const title = `${carrierName} SIM Owner Details ${cityName} | ${carrierName} Number Check, Owner Name & Verification`;
  const description = `Check ${carrierName} SIM owner details in ${cityName}, Pakistan. Verify ${carrierName} SIM number by CNIC, check ${carrierName} SIM owner name, use official ${carrier.appName} app, and visit ${carrierName} franchise in ${cityName} for biometric verification. Complete 2026 guide for ${carrierName} SIM details in ${cityName}.`;

  return generateMeta({
    title,
    description,
    path: `/pk/check/${citySlug}/${carrierSlug}`,
    surface: 'search',
    type: 'website',
    keywords: [...new Set(keywords)].slice(0, 20),
    images: [`/carrier/${carrierSlug}-${citySlug}-og.webp`],
  });
}

export function generateCityStructuredData(city: PakistanCity) {
  return generateStructuredData('service', {
    name: `SIM Owner Details Check - ${city.name}`,
    description: `Official SIM owner details verification services for ${city.name}, Pakistan. Check phone number details, mobile number details with owner name, SIM number check, and SIM details by number for all major carriers (Jazz, Zong, Telenor, Ufone).`,
    serviceType: 'Telecom Verification Service',
    provider: {
      '@type': 'Organization',
      name: 'SIM Owner Details',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SIM Verification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SIM Owner Details Online Check',
            description: `Check SIM owner details online in ${city.name} for all carriers.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Phone Number Details with Name',
            description: `Find phone number details with owner name in ${city.name}.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Number Details with Address',
            description: `Get mobile number details with owner name and address in ${city.name}.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SIM Number Check',
            description: `Run SIM number check and get SIM details by number in ${city.name}.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Live Tracker SIM Data',
            description: `Access live tracker SIM data for all networks in ${city.name}.`,
          },
        },
      ],
    },
  });
}

export function generateCityCarrierStructuredData(city: PakistanCity, carrier: any) {
  return generateStructuredData('service', {
    name: `${carrier.name} SIM Owner Details - ${city.name}`,
    description: `Official ${carrier.name} SIM owner details verification in ${city.name}, Pakistan. Check ${carrier.name} SIM number by CNIC, verify ${carrier.name} SIM owner name, use ${carrier.appName} app, and visit ${carrier.name} franchise for biometric verification.`,
    serviceType: 'Telecom Verification Service',
    provider: {
      '@type': 'Organization',
      name: 'SIM Owner Details',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
    offers: {
      '@type': 'Offer',
      name: `${carrier.name} SIM Verification`,
      description: `Complete ${carrier.name} SIM verification services in ${city.name} including owner details check, number verification, CNIC-based SIM check, and franchise visit guidance.`,
      price: '0',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
    },
  });
}

export function generateCityBreadcrumbs(citySlug: string) {
  const city = getCityBySlug(citySlug);
  if (!city) return null;

  return generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Pakistan SIM Verification', url: `${SITE_URL}/pk` },
    { name: 'City Guides', url: `${SITE_URL}/pk/check` },
    { name: `${city.name} SIM Owner Details`, url: `${SITE_URL}/pk/check/${citySlug}` },
  ]);
}

export function generateCityCarrierBreadcrumbs(citySlug: string, carrierSlug: string) {
  const city = getCityBySlug(citySlug);
  const carrier = getCarrierBySlug(carrierSlug);
  if (!city || !carrier) return null;

  return generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Pakistan SIM Verification', url: `${SITE_URL}/pk` },
    { name: 'City Guides', url: `${SITE_URL}/pk/check` },
    { name: `${city.name} SIM Owner Details`, url: `${SITE_URL}/pk/check/${citySlug}` },
    { name: `${carrier.name} ${city.name}`, url: `${SITE_URL}/pk/check/${citySlug}/${carrierSlug}` },
  ]);
}

export function generateCarrierComparisonMeta(): Metadata {
  return generateMeta({
    title: 'Compare Pakistan Carriers | Jazz vs Zong vs Telenor vs Ufone SIM Verification',
    description: 'Compare Jazz, Zong, Telenor, and Ufone SIM verification methods, USSD codes, apps, and franchise services. Find the best carrier for SIM owner details check, number verification, and CNIC-based SIM lookup in Pakistan.',
    path: '/pk/carriers/compare',
    surface: 'features',
    type: 'website',
    keywords: [
      'jazz vs zong vs telenor vs ufone',
      'best sim verification pakistan',
      'carrier comparison sim owner details',
      'jazz zong telenor ufone number check',
      'which carrier best sim verification',
      'pakistan telecom comparison',
      'sim owner details carrier compare',
    ],
    images: ['/carrier/compare-og.webp'],
  });
}

export function generateCarrierComparisonStructuredData() {
  return generateStructuredData('webpage', {
    title: 'Pakistan Carrier Comparison - SIM Verification',
    description: 'Compare Jazz, Zong, Telenor, and Ufone SIM verification methods, USSD codes, apps, and franchise services in Pakistan.',
    path: '/pk/carriers/compare',
  });
}
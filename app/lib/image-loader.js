export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/DSA_Learning_Plan' : '';
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}

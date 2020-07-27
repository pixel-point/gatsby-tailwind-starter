export default function getTextWithoutParagraph(htmlString) {
  return htmlString.replace(/<\/?p>/g, '');
}
